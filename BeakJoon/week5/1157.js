const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim();

//여러개 존재 ?
//많이 출력된 알파벳
let alp = input.toUpperCase().split("");
let word = [...new Set(alp)];

let result = 0;
console.log(word);
// for(let i = 0; i < word.length; i++;){
//     let count = 0;
//     for(let j = 0; j < alp.length; j++){
//         if(word[i] === alp[j]){
//             count++;
//             if(j === alp.length-1){

//             }
//         }
//     }
// }
