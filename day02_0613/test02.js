// process: 현재 실행되고 있는 프로그램에 대한 정보
let count = 0;

// argv
// function 함수명(파라미터, ...){}
console.log(process.argv);
console.log(process.argv[0]);

// argv를 추가할 수도 있음
// node test02.js hello js html css

console.log('argv count: ', process.argv.length);
const aryArgv = process.argv;

aryArgv.forEach(data=>{
    console.log(data);
})

// 환경변수 env: 비밀번호, 환경설정
// exports 전역객체: 모듈 사용시
// 전역변수
console.log(__dirname); // 현재 디렉토리 정보
console.log(__filename); // 현재 디렉토리 정보와 파일정보
console.dir(__dirname); // 현재 디렉토리 정보
console.dir(__filename); // 현재 디렉토리 정보와 파일정보

// os 내장 모듈
const os = reqire('os');
console.log('os host: ', os.hostname());
console.log('os homedir: ', os.homedir());
console.log('os totalmem: ', os.totalmem());
console.log('os freemem: ', os.freemem());
console.log('os version: ', os.version());
console.log('os cpu: ', os.cpu());

// path 내장모듈
// 파일경로 등 설정시 사용
const path = require('path');

