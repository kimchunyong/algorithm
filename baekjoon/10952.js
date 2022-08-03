const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const resultArr = [];
rl.on('line', line => {
    resultArr.push(line.split(' '))
}).on('close', () => {
    for(let i = 0; i < resultArr.length; i++){
        resultArr[i].reduce((acc, cur) => {
            if(+acc + +cur !== 0){
                console.log(+acc + +cur)
            }
        })
    }

    process.exit();
})
