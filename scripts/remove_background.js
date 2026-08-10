import sharp from 'sharp';

async function processImageBFS() {
  const inputPath = 'public/harshit-portrait.png';
  const outputPath = 'public/harshit-portrait-transparent.png';

  const image = sharp(inputPath);
  const { width, height, channels } = await image.metadata();
  const rawBuffer = await image.raw().toBuffer();

  const isBgPixel = (x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return false;
    const idx = (y * width + x) * channels;
    const r = rawBuffer[idx];
    const g = rawBuffer[idx + 1];
    const b = rawBuffer[idx + 2];
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    const diff = maxC - minC;
    // Background checkerboard is light gray/white (> 180 brightness, < 20 color variance)
    return r > 180 && g > 180 && b > 180 && diff < 20;
  };

  const visited = new Uint8Array(width * height);
  const isBg = new Uint8Array(width * height);
  const queue = [];

  // Seed boundary pixels that match background criteria
  for (let x = 0; x < width; x++) {
    if (isBgPixel(x, 0)) { queue.push(x, 0); visited[0 * width + x] = 1; }
    if (isBgPixel(x, height - 1)) { queue.push(x, height - 1); visited[(height - 1) * width + x] = 1; }
  }
  for (let y = 0; y < height; y++) {
    if (isBgPixel(0, y)) { queue.push(0, y); visited[y * width + 0] = 1; }
    if (isBgPixel(width - 1, y)) { queue.push(width - 1, y); visited[y * width + (width - 1)] = 1; }
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
        rgbaBuffer[outIdx + 3] = 0; // Transparent
      } else {
        rgbaBuffer[outIdx + 3] = 255; // Opaque avatar
      }
    }
  }

  await sharp(rgbaBuffer, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPath);

  console.log('BFS Flood Fill Transparent Image created successfully!');
}

processImageBFS().catch(console.error);
