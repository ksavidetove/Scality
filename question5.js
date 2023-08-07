import * as fs from 'fs';
import * as readline from 'readline';

async function averageAgeFromeLargeFile() {
    try {
        let sumAge = 0
        let nbLines = 0;
        const fileStream = fs.createReadStream('data.csv');
        var lineReader = readline.createInterface({ input: fileStream });
        
        for await (const line of lineReader) {
            // continue the loop if there is a header
            if (line === 'name,age,city') {
                continue;
            }

            var age = parseInt(line.split(',')[1]);
            sumAge += age;
            nbLines++; 
        }
        
        const average = sumAge / nbLines;
        console.log(average);
        return (average);

    } catch (err) {
        console.error(err);
    }
}