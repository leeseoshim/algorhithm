const input=require("fs").readFileSync('./input.txt', 'utf8').trim().split(' ');

//A+B를 출력
let result = input.reduce((a,b) => parseInt(a)+parseInt(b), 0);

console.log(result);

