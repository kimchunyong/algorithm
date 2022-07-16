const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

function solution(a,b,c){
    const calculateArr = [];

    calculateArr.push((A+B)%C)
    calculateArr.push(((A%C) + (B%C))%C)
    calculateArr.push((A*B)%C)
    calculateArr.push(((A%C) * (B%C))%C)

    return calculateArr;
}

const result = solution(A,B,C);

for(let i = 0; i < result.length; i++){
    console.log(result[i])
}
