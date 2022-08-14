let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numberArray = input[1].split('');

const total = numberArray.reduce((acc,cur) => Number(acc) + Number(cur))

console.log(`${total}`)
