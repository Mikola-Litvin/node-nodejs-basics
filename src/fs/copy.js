import * as fs from 'fs/promises';

export const copy = async () => {
  fs.realpath('src/fs/files/')
    .then(
      res => {
        fs.realpath('src/fs/files_copy/')
          .then(() => {throw 'FS operation failed'})
          .catch((err) => {
            if (!err.code) {
              console.log(err);
            } else {
              fs.cp('src/fs/files/', 'src/fs/files_copy/', {recursive: true});
            }
        });
      },
      err => {throw 'FS operation failed'})
    .catch(err => console.log(err));
};

copy();
