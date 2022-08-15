const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();

const solution = (input) =>{
    const inputArr = input.split('');

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const answer = [];

    alphabet.map((item,idx) => {
        return answer.push(inputArr.findIndex(item => item == alphabet[idx]));
    })

    return answer.join(' ');

}

const result = solution(input);

console.log(result)
