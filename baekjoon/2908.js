const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line.toString().split(' '))
}).on("close", function() {
    let [numArr] = input;
    let max = 0;

    numArr = numArr.map((num) => Number(num.split('').reverse().join('')))

    numArr.map((num) => {
        if(max < num){
            max = num
        }
    })

    console.log(max)

    process.exit();
})

