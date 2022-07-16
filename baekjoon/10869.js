const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

function calculation(a,b){
    const calculationArr = [];

    calculationArr.push(a+b);
    calculationArr.push(a-b);
    calculationArr.push(a*b);
    calculationArr.push(a/b);
    calculationArr.push(a%b);

    return calculationArr;
}

const result = calculation(A,B);

for(let i = 0; i < result.length; i++){
    console.log(parseInt(result[i]))
}
