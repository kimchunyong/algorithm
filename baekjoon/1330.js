const fs= require('fs');
const input =fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

function solution(a,b){
    if(a > b){
        return '>';
    }
    if(a < b){
        return '<';
    }
    if(a == b){
        return '==';
    }
}

const result = solution(A,B);

console.log(result);
