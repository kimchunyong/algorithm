const fs= require('fs');
const input =fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);

function solution(year){
    if(year >= 1 && year <= 4000){
        if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
            return 1;
        }else{
            return 0;
        }
    }
}

const result = solution(A);

console.log(result)
