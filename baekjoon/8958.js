const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line.split(''))
}).on("close", function() {
    input.shift();
    let result = '';
    let scores = [];
    let num = 0;

    for(let i = 0; i < input.length; i++){
        let scoreArr = [];
        num = 0;
        for(let j = 0; j < input[i].length; j++){
            if(input[i][j] === 'O'){
                num +=1
            }else{
                num = 0;
            }
            scoreArr.push(num)
        }
        scores.push(scoreArr)
    }

    let sumArr = scores.map((item) => {
        return item.reduce((acc,cur) => {
            return acc + cur
        }, 0)
    })

    sumArr.map((scores) => {
        result += scores +'\n'
    })

    console.log(result);
    process.exit();
})

