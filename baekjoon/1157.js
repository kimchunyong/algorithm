const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line.toString().split(''))
}).on("close", function() {
    const [Alpabet] = input;

    const arr = []
    const obj = {}
    let count = 0
    let result = ''

    const upperCase = Alpabet.map((item)=>item.toLocaleUpperCase())

    for(let i = 0; i < upperCase.length; i++){
        if(!obj[upperCase[i]]){
            obj[upperCase[i]] = 1
        }else{
            obj[upperCase[i]] += 1
        }
    }

    for(key in obj){
        if(obj[key] > count){
            count = obj[key]
            result = key
        }else if (obj[key] === count){
            result = '?';
        }
    }

    console.log(result)

    process.exit();
})

