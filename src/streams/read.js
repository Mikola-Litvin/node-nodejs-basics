import * as fs from 'fs';

export const read = async () => {
  fs.createReadStream('src/streams/files/fileToRead.txt', { encoding: 'utf-8'})
    .on('data', (chunk) => {
      process.stdout.write(chunk);
    })
};

read();
