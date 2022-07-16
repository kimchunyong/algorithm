const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

function divide(a,b){
    return a / b;
}

const result = divide(A,B);

console.log(result)
