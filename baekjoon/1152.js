const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on("line", function(line) {
    input.push(line.toString().trim().split(' '))
}).on("close", function() {
    const [strArr] = input;
    let count = 0;

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] !== ""){
            count++
        }
    }

    console.log(count)

    process.exit();
})

