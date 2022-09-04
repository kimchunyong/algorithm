const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line.toString().split(''))
}).on("close", function() {
    let [phoneNumber] = input;
    let totalTime = 0;

    const phoneObj = {
        'A':{
            num: 2,
            time: 3,
        },
        'B':{
            num: 2,
            time: 3,
        },
        'C':{
            num: 2,
            time: 3,
        },
        'D':{
            num: 3,
            time: 4,
        },
        'E':{
            num: 3,
            time: 4,
        },
        'F':{
            num: 3,
            time: 4,
        },
        'G':{
            num: 4,
            time: 5,
        },
        'H':{
            num: 4,
            time: 5,
        },
        'I':{
            num: 4,
            time: 5,
        },
        'J':{
            num: 5,
            time: 6,
        },
        'K':{
            num: 5,
            time: 6,
        },
        'L':{
            num: 5,
            time: 6,
        },
        'M':{
            num: 6,
            time: 7,
        },
        'N':{
            num: 6,
            time: 7,
        },
        'O':{
            num: 6,
            time: 7,
        },
        'P':{
            num: 7,
            time: 8,
        },
        'Q':{
            num: 7,
            time: 8,
        },
        'R':{
            num: 7,
            time: 8,
        },
        'S':{
            num: 7,
            time: 8,
        },
        'T':{
            num: 8,
            time: 9,
        },
        'U':{
            num: 8,
            time: 9,
        },
        'V':{
            num: 8,
            time: 9,
        },
        'W':{
            num: 9,
            time: 10,
        },
        'X':{
            num: 9,
            time: 10,
        },
        'Y':{
            num: 9,
            time: 10,
        },
        'Z':{
            num: 9,
            time: 10,
        },
    }

    phoneNumber.map((item) => {
        totalTime += phoneObj[item].time;
    })

    console.log(totalTime)

    process.exit();
})

