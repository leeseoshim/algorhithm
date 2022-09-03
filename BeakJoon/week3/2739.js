// const input = require('fs').readFileSync('./input.txt','utf8').trim();

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath,'utf8').trim();


let num = parseInt(input);
for(let j=1; j<=9; j++){
    console.log(`${num} * ${j} = ${num*j}`);
}
