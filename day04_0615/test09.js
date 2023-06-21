// stream 처리: buffer => buffer 직접 데이터를 읽고 쓰게 만들어 주기

const fs = require('fs');
const readStream = fs.createReadStream('./datas/lorem100.txt');
const writeStream = fs.createReadStream('./datas/bigData.txt');

// readStream.on('data', (chunk)=>{
//     console.log("-------------------    NEW    CHUNK   ------------------");
//     console.log(chunk.toString());

//     writeStream.write(chunk);
// })

// 메모리에서 메모리로 직접 쓰기
readStream.pipe(writeStream);