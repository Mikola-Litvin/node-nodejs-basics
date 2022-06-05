import * as path from 'path';
import * as url from 'url';
import * as http from 'http';
import { release, version } from 'os';
import { createRequire } from 'module';

const consoleLog = await import('./files/c.js');
const require = createRequire(import.meta.url);
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const random = Math.random();

consoleLog;
let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

