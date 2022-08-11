const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {
    const totalPrice = Number(input.slice(0,1));
    let itmes = input.slice(2,input.length);
    let sumPrice = 0;

    itmes = itmes.map((item) => item.split(' '))

    itmes.map((item) => {
        sumPrice += Number(item[0]) * Number(item[1])
    })

    totalPrice === sumPrice ? console.log('Yes') : console.log('No');

    process.exit();
})

