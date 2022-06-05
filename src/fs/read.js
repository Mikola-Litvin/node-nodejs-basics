import * as fs from 'fs/promises';

export const read = async () => {
  fs.readFile('src/fs/files/fileToRead.txt', { encoding: 'utf-8' })
    .then(
      res => {
        console.log(res);
      },
      err => {throw 'FS operation failed'})
    .catch(err => console.error(err));
};

read();
