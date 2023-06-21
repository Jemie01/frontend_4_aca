const fs = require('fs');
// 파일 읽기, 쓰기
// 폴더를 만들고 지우고 가능

// fs.rmdir('./newDir', (err)=>{
//     console.log(err);
// })
process.on('mkdir', ()=>{
    console.log('폴더 생성')
})
process.on('rmdir', ()=>{
    console.log('폴더 삭제')
})
setTimeout(()=>{
    fs.mkdir('./newDir', (err)=>{
        console.log(err);
    })
    process.emit('mkdir'); // 이벤트
}, 1000)
setTimeout(()=>{
    fs.rmdir('./newDir', (err)=>{
        console.log(err);
    })
    process.emit('rmdir');
}, 3000)