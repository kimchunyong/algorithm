const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let resultArr = [];
rl.on('line', line => {
    const arr = line.split(" ").map(x=>parseInt(x));

    if(arr.length>1){
        const result = arr.reduce((prev, cur)=>prev+cur);
        resultArr.push(result);
    }
}).on('close', () => {
    console.log(resultArr.join("\n"));
    process.exit();
})
