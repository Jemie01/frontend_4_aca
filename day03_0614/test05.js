/* 
브라우저 JSON
fetch
dom
events

Node.js 
fs(file system)
eventEmitter: dom이 없으니 클릭 불가, 시스템끼리 서로 데이터를 주고 받는 이벤트
*/

// node가 event 사용하는 방법
// const EventEmitter = require('events');
// eonst myEvent = new EventEmitter();
// pocess는 EventEmitter를 상속받음

process.on('hello', ()=>{
    console.log('hello event 발생');
})
process.on('javascript', ()=>{
    console.log('javascript event 발생')
});
process.on('bye', ()=>{
    const err = new Error();
});
process.emit('javascript')
process.emit('bye')
process.on('exit', ()=>{
    console.log('process 종료')
})
// error 발생했을 때 
process.on('uncaughtException', (err)=>{
    console.log(err);
    process.exit(1);
})