const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {

    input.map((item) => {
        console.log(item.charCodeAt(0))
    })

    process.exit();
})

