const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

function add(a,b){
    return a + b;
}

const result = add(A,B);

console.log(result)
