import * as fs from 'fs/promises';
import { createHash } from 'node:crypto';

export const calculateHash = async () => {
  const hash = createHash('sha256');

  fs.readFile('src/hash/files/fileToCalculateHashFor.txt')
    .then(data => {
      hash.update(data);
      console.log(hash.digest('hex'));
    });
};

calculateHash();
