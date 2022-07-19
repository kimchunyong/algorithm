const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    const x = parseInt(input[0]);
    const y = parseInt(input[1]);

    if(x > 0 && y > 0){
        console.log(1)
    }

    if(x < 0 && y > 0){
        console.log(2)
    }

    if(x < 0 && y < 0){
        console.log(3)
    }

    if(x > 0 && y < 0){
        console.log(4)
    }
    process.exit();
});