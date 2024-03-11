const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

readableStream.on('data', (chunk) => {
  try {
    writableStream.write(chunk.toString() + '\n');
    console.log(chunk.toString());
  } catch (error) {
    // Tangani kesalahan ketika chunk tidak dapat ditulis.
  }
});

readableStream.on('end', () => {
  console.log('Selesai menulis ke output.txt');
});
