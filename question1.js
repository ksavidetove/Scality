// Question 1
import * as fs from 'fs/promises';

async function readAndPrintFile(filePath) {
    try {
        const file = await fs.readFile(filePath, {encoding: 'utf8'});
        console.log(file);
    } catch (err) {
        console.error(err.message);
    }
}

readAndPrintFile('data.csv');