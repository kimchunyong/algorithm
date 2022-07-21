const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {
    const loop = parseInt(input.shift());

    const numberArr = [];

    input.forEach((list,idx) => {
        numberArr.push(list.split(' '))
    });

    for(let i = 0; i < loop; i++){
        console.log(parseInt(numberArr[i][0]) + parseInt(numberArr[i][1]))
    }
})

