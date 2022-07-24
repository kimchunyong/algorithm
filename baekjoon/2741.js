const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const resultArr = [];
rl.on('line', line => {
    resultArr.push(line)
}).on('close', () => {
    let string = '';
    const num = parseInt(resultArr[0]);
    for(let i = 1; i <= num; i++){
        string += i + '\n';
    }
    console.log(string);
    process.exit();
})
