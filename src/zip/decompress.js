import { unzip } from 'zlib';
import * as fs from 'fs';

export const decompress = async () => {
  const readableStream = fs.createReadStream('src/zip/files/archive.gz');
  const writableStream = fs.createWriteStream('src/zip/files/fileToCompress.txt');

  readableStream.on('data', (chunk) => {
    unzip(chunk, (err, chunk) => {
      if (err) {
        console.error('Something went wrong');
        process.exitCode = 1;
      }
      writableStream.write(chunk);
    });
  });
};

decompress();
