//검색창: Ctrl + shift + p => 백준 문제 가져오기
//실행 단축키: Ctrl + Alt + N
//f9: 커서있는 라인 브레이크 포인트
//f10: 한줄씩 디버깅
//shift + f5: 디버깅 종료
//ctrl+ k +f: 자동들여쓰기

const fs = require("fs");
//vscode에서는 input.txt에 입력된 예제를 가져와 테스트
//백준같은 리눅스에서는 /dev/stdin로 받음
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
//input.txt 파일 읽어와서 저장
let input = fs.readFileSync(filePath).toString().trim();


// 예제입력된 파일 받아올때
//1. 하나의 값을 입력받을 때()
const input1=fs.readFileSync('/dev/stdin').toString().trim();

//2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input2=fs.readFileSync('/dev/stdin').toString().trim().split(' ');

//3. 여러 줄의 값들을 입력받을 때
const input3=fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const input4=fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const [n,...arr]=input; 

//5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const input5=fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n2,...arr2]=input;