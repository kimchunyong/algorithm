const fs= require('fs');
const input =fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);

function solution(num){
    if(num >= 90 && num <= 100){
        return 'A';
    }

    if(num >= 80 && num <= 89){
        return 'B';
    }

    if(num >= 70 && num <= 79){
        return 'C'
    }

    if(num >= 60 && num <= 69){
        return 'D'
    }

    if(num <= 59){
        return 'F'
    }
}

const result = solution(A);

console.log(result);
