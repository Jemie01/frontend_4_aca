const fs = require('fs');
// front: 파일 읽기 => fetch
const path = require('path');

// 동기처리, 비동기처리 async
const data = fs.readFile('./datas/lorem.txt', (err, data)=>{
    if(err) console.error(err);

    console.log(data);
})

console.log('콘솔 제일 먼저 처리');
console.log(data);


/*
fs.readFile('./datas/lorem.txt', 'utf-8', (err, data)=>{
    if(err) console.error(err);

    console.log(data); // toString으로 변환하지 않아도 실시간으로 처리
})


const readPath = path.join(__dirname, 'datas', 'lorem.txt')
console.log(readPath); // 경로 출력

fs.readFile(readPath, 'utf-8', (err, data)=>{
    if(err) console.error(err);

    console.log('lorem: ', data); // toString으로 변환하지 않아도 실시간으로 처리
})
*/
/*
const readJson = path.join(__dirname, 'datas', 'user.json')

fs.readFile(readJson,  (err, data)=>{
    if(err) console.error(err);

    console.log(data); // Buffer에 있는 걸 가져오는 거임
    console.log(data.toString()); // 문자열 그대로 읽기
    const user = JSON.parse(data); // js object
    console.log(user.first_name); // js object

    const {first_name, last_name} = JSON.parse(data);
    console.log(first_name, last_name);
}) */

const User = require('./datas/user.json');
console.log(User);

// node.js: 코드 순서대로 처리된다는 보장이 없다
// 싱글쓰레드: 한번에 하나의 코드만 실행됨
// 처리 => 또 다른 처리: 느림
// 처리 순서가 달라지고, data 읽기 완료 전 처리하면 문제 발생
// 비동기처리: 순차처리 되도록 해줌, 어떤 일이 있어도 완료 시킴