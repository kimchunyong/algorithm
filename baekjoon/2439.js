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
    let string = ''

    for(let i = 1; i <= num; i++){
        for(let k = i; k < num; k++){
            string += ' '
        }
        for(let j = i; j >0; j--){
            string += '*'
        }
        string += '\n'
    }
    console.log(string)
})
