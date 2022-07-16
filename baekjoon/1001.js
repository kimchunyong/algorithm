const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

function minus(a,b){
    return a - b;
}

const result = minus(A,B);

console.log(result)
