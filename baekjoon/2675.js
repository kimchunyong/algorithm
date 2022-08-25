const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line.toString().split(' '))
}).on("close", function() {
    input.shift()
    let result = ''

    const obj = input.map((item,idx)=>{
        return {
            loop: Number(item[0]),
            text: item[1]
        }
    })

    obj.map((item) => {
        for(let i = 0; i < item['text'].length; i++){
            for(let j = item['loop']; j > 0; j--){
                result += item['text'][i]
            }
        }
        result += '\n'
    })

    console.log(result)

    process.exit();
})

