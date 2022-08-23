const input=require("fs").readFileSync('./input.txt').toString().trim().split(' ');

//A×B를 출력
let result = input.reduce((a,b) => a*b);
console.log(result);