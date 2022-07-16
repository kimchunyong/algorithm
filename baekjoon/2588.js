const fs=require('fs');
const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

function solution(a,b){
    let A = a;
    let B = b;
    let arrB = b.toString().split('');

    console.log(arrB[2] * A);
    console.log(arrB[1] * A);
    console.log(arrB[0] * A);
    console.log(A * B);
}

solution(A,B);

