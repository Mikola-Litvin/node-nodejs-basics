import * as fs from 'fs/promises';
import * as path from 'path';

export const create = async () => {
    const newFilePath = path.join('src/fs/files', 'fresh.txt');

    fs.realpath(newFilePath)
      .then(() => {throw 'FS operation failed'})
      .catch((err) => {
        if (!err.code) {
          console.error(err);
        } else {
          fs.writeFile(newFilePath, 'I am fresh and young');
        }
      })
};

create();
