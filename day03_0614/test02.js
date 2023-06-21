/* 
브라우저 JSON
fetch
dom
events

Node.js 
fs(file system)
eventEmitter: dom이 없으니 클릭 불가, 시스템끼리 서로 데이터를 주고 받는 이벤트
*/

const EventEmitter = require('events');
const myEvent= new EventEmitter();


// 이벤트 처리
// document.addEventListener('click', ()=>{})
myEvent.once('event01', ()=>{ // 한번만 처리하게끔 once
    console.log('event01 발생');
    // 뭔갈 처리하기
})
myEvent.on('event02', ()=>{
    console.log('event02 발생');
    // 어떤 처리하기
})

myEvent.emit('event01'); /// 이벤트 발생
myEvent.emit('event01'); /// 이벤트 발생
myEvent.emit('event02'); /// 이벤트 발생

setInterval(()=>{
    myEvent.emit('event01');
}, 3000) // ctrl+C 해야 종료됨
setTimeout(()=>{
    myEvent.emit('event02');
}, 5000)

// 프로그램이 종료 될 때마다 발생하는 이벤트
process.on('exit', ()=>{
    console.log('setInterver');
})
myEvent.listenerCount('event01'); //