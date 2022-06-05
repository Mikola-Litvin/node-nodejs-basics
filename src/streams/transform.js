import { pipeline, Transform } from 'stream';

export const transform = async () => {
  const reverse = (str) => {
    return str.split('').reverse().join('');
  }

  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      const resultString = reverse(chunk.toString());
      callback(null, resultString);
    }
  });

  pipeline(process.stdin, reverseText,  process.stdout, err => {
    if (err) {
      return;
    }
  });
};

transform();
