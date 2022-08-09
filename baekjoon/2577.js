const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', function (line) {
    input.push(+line)
}).on('close', function () {
    const [A,B,C] = input;
    const multiple = String(A * B * C).split('')

    let numberCount = {
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
    }

    multiple.map((item) => {
        numberCount[item] += 1
    })

    for(key in numberCount){
        console.log(numberCount[key]+'')
    }

    process.exit();
});
