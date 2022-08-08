const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', function (line) {
    input.push(line.split(' '))
}).on('close', function () {
    const [_, numbers] = input;

    let max = +numbers[0];
    let min = +numbers[0];

    for(let i = 0; i < numbers.length; i++){
        if (max < +numbers[i]) {
            max = +numbers[i];
        }

        if (min > +numbers[i]) {
            min = +numbers[i];
        }
    }

    console.log(`${min} ${max}`);


    process.exit();
});
