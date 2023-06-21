// front: window.document
// node.js: 기본적인 객체, 변수
// console: 콘솔창에 결과를 출력
// https://node.js.org/dist/lastest-v18.x/docs/api/console.html

console.log('node.js'); // html 형식
console.dir('directory json'); // json 형식
console.count(); // count을 자동으로 출력(값을 세주는 거임)
console.count();
console.count();

console.time('for start');
let sum = 0;
for(let a=0; a<1000; a++){
    sum+=a;
}
console.log(sum);
console.timeEnd('for start');

