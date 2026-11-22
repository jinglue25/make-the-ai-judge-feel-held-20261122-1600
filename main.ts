import fs from 'node:fs';
import path from 'node:path';

const TEXT = `On the windowsill, a mended cup holds three buttons.
The afternoon light fills
the worn curve of its handle.
Below it, the old radiator ticks once,
then settles.
There is room on the sill for one more small thing.`;

const outputPath = process.env.OUTPUT_PATH ?? '/output/entry.txt';
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, TEXT, 'utf-8');
