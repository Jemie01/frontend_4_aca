const fs = require('fs');
// front: 파일 읽기 => fetch로 썼었음
if(fs.existsSync('myfolder'))
    fs.mkdir('myfolder', (err)=>console.log(err))

if(fs.existsSync('myfolder')){
    fs.rmdir('myfolder', err=>console.log(err))
}