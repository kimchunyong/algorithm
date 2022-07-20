const fs= require('fs');
const input =fs.readFileSync('/dev/stdin').toString().split(' ');

const A =  parseInt(input[0]);
const B =  parseInt(input[1]);
const C =  parseInt(input[2]);

/*
* 주사위 3개를 던져 몇개가 같은지 체크
* 같은 값이 무엇인지 체크
* 만약 값이 모두 다르다면 그 중 가장 큰 수를 체크
*/

function solution(arr){
    const result = {};

    let max = 0;
    let key = null;
    let prev = 0;

    arr.forEach((x) => {
        result[x] = (result[x] || 0)+1;
    });

    if(Object.keys(result).length < 3){
        for(value in result){
            if(prev === 0){
                prev = result[value];
                key = value
            }

            if(prev < result[value]){
                prev = result[value]
                key = value
            }
        }

        if(Object.keys(result).length === 1){
            console.log(10000 + (key*1000))
        }else{
            console.log(1000 + (key*100))
        }
    }

    if(Object.keys(result).length === 3){
        max = Object.keys(result).reduce((prev, cur)=>{
            return prev > cur ? prev : cur;
        });

        console.log(max*100)
    }
}

solution([A,B,C]);
