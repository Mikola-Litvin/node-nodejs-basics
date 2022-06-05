import * as fs from 'fs/promises';

export const remove = async () => {
  fs.rm('src/fs/files/fileToRemove.txt')
    .catch(() => console.log('FS operation failed'));
};

remove();
