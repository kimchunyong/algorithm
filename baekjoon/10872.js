const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line.split(' '))
}).on("close", function() {
    const [info, numbers] = input;
    const [count, maxNum] = info;
    let resultArr = ''

    for(let i = 0; i <= count; i++){
        if(parseInt(numbers[i]) < parseInt(maxNum)){
            resultArr += numbers[i] + ' '
        }
    }

    console.log(resultArr.trim())
})
