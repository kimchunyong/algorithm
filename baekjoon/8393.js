const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {
    const num = parseInt(input[0]);
    let total = 0;

    for(let i = 1; i <= num; i++){
        total += i;
    }
    console.log(total)
})
