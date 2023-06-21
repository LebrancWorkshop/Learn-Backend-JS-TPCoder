import { open, writeFile } from 'node:fs/promises';
import csv from 'csv-parser';


// Task: Read a CSV file and write it as JSON.
const basePath = process.cwd();
const targetReadPath = [basePath, 'data', 'example.csv'];
const targetWritePath = [basePath, 'data', 'example.json'];
const readPath = targetReadPath.join('/');
const writePath = targetWritePath.join('/');

// const file = await open('');
const fd = await open(readPath);
const stream = fd.createReadStream().pipe(csv());

const data = [];

for await (const row of stream) {
  data.push(row);
}

await writeFile(writePath, JSON.stringify(data, null, 2));
