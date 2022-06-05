import * as fs from 'fs';

export const write = async () => {
  process.stdin.on('readable', () => {
    fs.createWriteStream('src/streams/files/fileToWrite.txt', { encoding: 'utf-8'})
    .write(process.stdin.read())
    .end;
  });
};

write();
