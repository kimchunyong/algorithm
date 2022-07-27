let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testcase = Number(input[0]);

for (let i = 1; i <= testcase; i++) {
    let A = Number(input[i].split(' ')[0]);
    let B = Number(input[i].split(' ')[1]);
    console.log(`Case #${i}: ${A} + ${B} = ${A+B}`);
}
