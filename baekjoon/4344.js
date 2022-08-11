const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line.split(' '))
}).on("close", function() {
    input.shift();

    for(let i = 0; i < input.length; i++){
        input[i].shift();
    }
    let result = '';
    let divideScore = [];

    const numbers = input.map((item) => item.map((item)=>Number(item)));

    numbers.map((item) => {
        let count = item.length;
        const sum = item.reduce((acc, cur) => {
            return acc + cur
        },0)
        divideScore.push(sum/count)
    })

    for(let j = 0; j < numbers.length; j++){
        let count = 0;
        let peopleLength = 0;
        for(let k = 0; k < numbers[j].length; k++){
            if(numbers[j][k] > divideScore[j]){
                count +=1;
                peopleLength = numbers[j].length;
            }
        }
        console.log((count/peopleLength * 100).toFixed(3) + '%')
    }

    process.exit();
})

