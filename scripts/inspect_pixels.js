import sharp from 'sharp';

async function inspect() {
  const image = sharp('public/harshit-portrait.png');
  const { width, height, channels } = await image.metadata();
  const rawBuffer = await image.raw().toBuffer();

  console.log(`Image dimensions: ${width}x${height}, channels: ${channels}`);

  // Find lowest y coordinate containing non-background pixels (e.g. hair/beard/skin)
  // Skin/hair has color or dark beard
  let minY = height, maxY = 0, minX = width, maxX = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = rawBuffer[idx];
      const g = rawBuffer[idx + 1];
      const b = rawBuffer[idx + 2];
      const maxC = Math.max(r, g, b);
      const minC = Math.min(r, g, b);
      const diff = maxC - minC;

      // Non-background pixel test: either saturated color (diff > 18) or hair/beard (dark: maxC < 70)
      const isHead = (diff > 15 || maxC < 65) && (r > 30 || g > 30 || b > 30);

      if (isHead) {
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
  }

  console.log(`Head bounding box estimated: X: ${minX}..${maxX}, Y: ${minY}..${maxY}`);
}

inspect().catch(console.error);
