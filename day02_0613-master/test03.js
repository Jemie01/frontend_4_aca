// exports 전역객체 : 모듈 사용시
// 전역변수 
console.log(__dirname); // 현재 디렉토리 정보
console.log(__filename); // 현재 디렉토리와 파일정보
console.dir(__dirname); // 현재 디렉토리 정보
console.dir(__filename); // 현재 디렉토리와 파일정보

// os 내장 모듈 
const os = require('os');
console.log('os host : ', os.hostname());
console.log('os homedir : ', os.homedir());
console.log('os totalmem : ', os.totalmem());
console.log('os freemem : ', os.freemem());
console.log('os version : ', os.version());
console.log('os cpu : ', os.cpus());

// path 내장 모듈 
// 파일경로등 설정시 사용 
const path = require('path');

console.log('폴더명 : ', path.dirname(__dirname));
console.log('폴더명 : ', path.dirname(__filename));
console.log('확장자 : ', path.extname(__filename));
console.log('파일명 : ', path.basename(__filename));

const mypath = path.join('./', 'front', 'foo', 'far', 'test.js');
console.log( mypath );
const mypath2 = path.join('.///', '/front/', '//foo', '/far', 'test.js');
console.log('mypath2 : ', mypath2 );

const pathAry = [ 'front', 'foo', 'far', 'test.js'];
const mypath3 = pathAry.join( path.sep );  
console.log( 'mypath3 : ', mypath3);

const pathAry2 = [ './front', '///foo', '//far', '////test.js']; 
const mypath4 = path.normalize(pathAry2.join('/')); 
console.log('mypath4 : ', mypath4);