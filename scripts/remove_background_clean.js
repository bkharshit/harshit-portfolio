import sharp from 'sharp';

async function processClean() {
  const inputPath = 'public/harshit-portrait.png';
  const outputPath = 'public/harshit-portrait-transparent.png';

  const image = sharp(inputPath);
  const { width, height, channels } = await image.metadata();
  const rawBuffer = await image.raw().toBuffer();

  // Helper to test if pixel is background
  const isBgPixel = (x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return true;
    // Hard cap: below y = 825 is completely background
    if (y >= 825) return true;

    const idx = (y * width + x) * channels;
    const r = rawBuffer[idx];
    const g = rawBuffer[idx + 1];
    const b = rawBuffer[idx + 2];

    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    const diff = maxC - minC;

    // Checkerboard pattern (white, light gray, dark shadowed gray)
    // Low saturation: diff < 22.
    // Beard hair is very dark (maxC < 55) or has slight warm tone.
    // If diff < 22 and maxC > 75, it is checkerboard grid or shadow on grid.
    if (diff < 22 && maxC > 75) return true;

    // Pure white / high brightness neutral
    if (minC > 180 && diff < 25) return true;

    return false;
  };

  const visited = new Uint8Array(width * height);
  const isBg = new Uint8Array(width * height);
  const queue = [];

  // Seed all 4 borders
  for (let x = 0; x < width; x++) {
    queue.push(x, 0); visited[0 * width + x] = 1;
    queue.push(x, height - 1); visited[(height - 1) * width + x] = 1;
  }
  for (let y = 0; y < height; y++) {
    queue.push(0, y); visited[y * width + 0] = 1;
    queue.push(width - 1, y); visited[y * width + (width - 1)] = 1;
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const pos = cy * width + cx;
    isBg[pos] = 1;

    const neighbors = [
      [cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1],
      [cx + 1, cy + 1], [cx - 1, cy - 1], [cx + 1, cy - 1], [cx - 1, cy + 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nPos = ny * width + nx;
        if (!visited[nPos] && isBgPixel(nx, ny)) {
          visited[nPos] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  // Build RGBA buffer with smooth alpha edge transition
  const rgbaBuffer = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const outIdx = (y * width + x) * 4;
      const pos = y * width + x;

      rgbaBuffer[outIdx] = rawBuffer[idx];
      rgbaBuffer[outIdx + 1] = rawBuffer[idx + 1];
      rgbaBuffer[outIdx + 2] = rawBuffer[idx + 2];

      if (isBg[pos]) {
        rgbaBuffer[outIdx + 3] = 0;
      } else {
        // Check if on border to apply gentle anti-aliasing alpha
        let bgNeighbors = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy, nx = x + dx;
            if (ny >= 0 && ny < height && nx >= 0 && nx < width) {
              if (isBg[ny * width + nx]) bgNeighbors++;
            }
          }
        }

        if (bgNeighbors > 3) {
          rgbaBuffer[outIdx + 3] = 160; // Soft edge
        } else if (bgNeighbors > 1) {
          rgbaBuffer[outIdx + 3] = 215; // Subtle edge
        } else {
          rgbaBuffer[outIdx + 3] = 255;
        }
      }
    }
  }

  await sharp(rgbaBuffer, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPath);

  console.log('Clean background removal complete!');
}

processClean().catch(console.error);
