import * as fs from 'fs/promises';

export const rename = async () => {
  fs.realpath('src/fs/files/wrongFilename.txt')
  .then(
    res => {
      fs.realpath('src/fs/files/properFilename.md')
        .then(() => {throw 'FS operation failed'})
        .catch((err) => {
          if (!err.code) {
            console.log(err);
          } else {
            fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md');
          }
      });
    },
    err => {throw 'FS operation failed'})
  .catch(err => console.log(err));
};

rename();
