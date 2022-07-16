const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const YEAR = input

function CalculateYear(year){
    return year - 543
}

const result = CalculateYear(YEAR);

console.log(result)
