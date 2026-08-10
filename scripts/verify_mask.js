import sharp from 'sharp';

async function verify() {
  const image = sharp('public/harshit-portrait-transparent.png');
  const { width, height, channels } = await image.metadata();
  const rawBuffer = await image.raw().toBuffer();

  console.log(`Checking transparent image dimensions: ${width}x${height}`);

  let nonZeroCountBelowBeard = 0;
  for (let y = 780; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const alpha = rawBuffer[idx + 3];
      if (alpha > 0) {
        nonZeroCountBelowBeard++;
      }
    }
  }

  console.log(`Non-zero alpha pixels below y=780: ${nonZeroCountBelowBeard}`);

  let totalOpaquePixels = 0;
  let minHeadY = height, maxHeadY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const alpha = rawBuffer[(y * width + x) * 4 + 3];
      if (alpha > 100) {
        totalOpaquePixels++;
        if (y < minHeadY) minHeadY = y;
        if (y > maxHeadY) maxHeadY = y;
      }
    }
  }

  console.log(`Total opaque pixels: ${totalOpaquePixels}`);
  console.log(`Opaque head Y range: ${minHeadY}..${maxHeadY}`);
}

verify().catch(console.error);
