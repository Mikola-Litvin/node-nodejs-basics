import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import * as fs from 'fs';

export const compress = async () => {
  const archivator = createGzip();
  const readableStream = fs.createReadStream('src/zip/files/fileToCompress.txt');
  const writableStream = fs.createWriteStream('src/zip/files/archive.gz');

  pipeline(readableStream, archivator, writableStream, (err) => {
    if (err) {
      console.error('Something went wrong');
      process.exitCode = 1;
    }
  });
};

compress();
