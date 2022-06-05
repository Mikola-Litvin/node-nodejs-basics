import * as fs from 'fs/promises';

export const list = async () => {
  fs.readdir('src/fs/files/')
    .then(
      res => {
        res.forEach(fileName => console.log(fileName));
      },
      err => {throw 'FS operation failed'})
    .catch(err => console.error(err));
};

list();
