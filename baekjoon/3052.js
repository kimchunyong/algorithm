const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const resultArr = [];
rl.on('line', line => {
    resultArr.push(+line)
}).on('close', () => {
    const newNumbers = resultArr.map((item) => +item)

    const divideNum = newNumbers.map((item) => item%42)

    const result = divideNum.filter((v, i) => divideNum.indexOf(v) === i)

    console.log(result.length)

    process.exit();
})
