const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const resultArr = [];
rl.on('line', line => {
    const items = line.split(' ');
    items.map((item) => resultArr.push(+item))
}).on('close', () => {
    let string = ""
    const CHESS_NUMBERS = {
        'KING' : 1,
        'QUEEN' : 1,
        'ROOK' : 2,
        'BISHOP' : 2,
        'KNIGHT' : 2,
        'PAWN' : 8,
    }

    const CHESS = {
        "1": 'KING',
        "2": 'QUEEN',
        "3": 'ROOK',
        "4": 'BISHOP',
        "5": 'KNIGHT',
        '6': 'PAWN'
    }

    resultArr.map((item,idx) => {
        string += CHESS_NUMBERS[CHESS[idx + 1]] - item + ' '
    })

    console.log(string)

    process.exit();
})
