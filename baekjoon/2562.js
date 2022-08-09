const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    let max = +input[0];
    let loc = 1;

    for(let i = 0; i < input.length; i++){

        if(max <= +input[i]){
            max = +input[i]
            loc = i + 1
        }
    }

    console.log(max)
    console.log(loc)

    process.exit();
});
