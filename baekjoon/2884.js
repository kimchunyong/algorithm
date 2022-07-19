const fs=require('fs');
const input=fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let h = parseInt(input[0]);
let m = parseInt(input[1]);

m -= 45;

if(m < 0) {
    m += 60;
    h--;
    if(h < 0) h = 23;
}

console.log(h+' '+m);
