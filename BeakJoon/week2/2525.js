const [a,b,c] = require('fs').readFileSync('./input.txt','utf8').trim().split(/\s+/).map(Number);

let h = a;
let m = b;

m+=c;
while(m >= 60){
    m-=60;
    h++;
}

h %= 24;

console.log(`${h} ${m}`);