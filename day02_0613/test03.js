// path 내장 모듈
// 파일경로 등 설정 시 사용
const path = require('path');
console.log('폴더명: ', path.dirname(__dirname));
console.log('폴더명: ', path.dirname(__filename));
console.log('확장자: ', path.extname(__filename));
console.log('파일명: ', path.basename(__filename));

const mypath = path.join('./', 'front', 'foo', 'far', 'test.js');
const mypath2 = path.join('.///', '/front/', '//foo', 'far', 'test.js');
console.log(mypath);
console.log(mypath2);
const pathAry = ['.///', './front/', '//foo', 'far', 'test.js'];
const mypath3 = pathAry.join(path.sep);
// const mypath3 = pathAry.join('/');
console.log(mypath3);