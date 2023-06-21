const fs = require('fs');
const path = require('path');

// 오류가 날 확률이 높음 callback의 callback이 많아서 
// 이런 현상을 = callback hell이라 부름

const writePath = path.join(__dirname, "datas", "writeLorem.txt");
// 쓰기할 때는 폴더가 부정확하면 error 발생 
fs.watchFile(writePath, "data 쓰기", err=>{
    console.log(err);
    console.log("1. write");
});

// bash 쓰기 -> git과 연결할 수 있음~
// setting에서 terminal window를 null을 bash로 바꿔야 가능합니당

// 읽어와서 쓰기 // callback을 씀 2번 // 순서처리됨
fs.readFile('./datas/lorem.txt', "utf-8", (err)=>{
    console.log("2. ", data);

    // 기존에 파일이 있으면 추가
    // 없으면 만들어서 추가, error 없음 
    fs.appendFile(writePath, data, err=>{
        console.log(err);
        console.log("3. write");
});
    fs.rename(
        path.join(__dirname, "datas", "writeLorem.txt"),
        path.join(__dirname, "datas", "newName.txt"),
        (err)=>{
            console.log(err)
            console.log("4. rename");
        }
    )
    fs.appendFile(
        path.join(__dirname, 'datas', 'append.txt'),
        "append 확인",
        (err)=>{
            console.log(err);
            console.log("5. appendFile")
        }
    )
});

// fs.rename
// fs.appendFile
// fs.writeFile
// fs.readfile
// fs.mkdir
// fs.rmdir

// 이걸 하다보니 순차처리가 안됨 -> 순차처리할려니 callback hell이 생김
// => 바꿀려면 비동기 처리로 바꿔주면 됨~