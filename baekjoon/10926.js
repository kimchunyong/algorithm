const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const USER_ID = input

function checkId(id){
    return id + '??!'
}

const result = checkId(USER_ID);

console.log(result)
