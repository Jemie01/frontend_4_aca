const express = require('express');
const app = express();
const fs = require(fs);
const path = require('path');

app.set('PORT', 3000);
app.use((req, res, next)=>{
    console.log('method', req.method, 'url:', req.url);
    next();
})

// app.use(express.static(path.join(__dirname, 'views'))); // css, js 고유폴더에 등록
app.use(express.static(path.join(__dirname, 'public'))); // css, js 고유폴더에 등록
// public/script, style, img 퍼블릭 폴더 안에 다 넣는거임
// html 파일은 views에 넣는거고
// data는 model에

app.use(express.json()); // post, get, put, delete: json 형태의 데이터를 처리하도록 해주는 미들웨어

app.get('/', (req, res)=>{
    console.log('1. get');
    // res.send('문자열');
    res.status(200);
    res.send('<h1>문자열</h1>'); // 문자열이라 태그 번역 안됨 // html 처리
    // res.json({"first_name": "honggildong"});
    // res.send(JSON.stringify({"first_name": "hong"}))
    // res.sendFile(path.join(__dirname, 'views', 'index.html')); // html 처리
})
app.get('/hq-swap', (req, res)=>{
    // css, js 못 읽어옴
    res.sendFile(path.join(__dirname, 'views', 'hq-swap.html')); // html 처리
})
app.get('/subdir', (res, req)=>{
    res.sendFile(path.join(__dirname, 'subdir', 'index.html'));
})
// app.get('/model', (res, req)=>{
//     const users = require('./model/users.json');
//     res.json(users);
// })
app.get('/model', (res, req)=>{
    const users = fs.readFileSync('./model/users.json', "utf-8");
    res.send(users);
})
// localhost:3000/user/kim/test01
// localhost:3000/user/test01
// 여러개 가능
app.get('/user/:user_id/:user_pwd', (res, req)=>{
    const user = req.params;
    // {"user_id": "kim"}
    // {"user_id": "park", "user_pwd": "test01"}
    res.send(user);
})
// localhost:3000/customer/kim/test01
app.get('/customer/:user_id/:user_pwd', (res, req)=>{
    const {user_id, user_pwd} = req.params;
    res.send(user_id, user_pwd);
})
// localhost:3000/costomer
// localhost:3000/user
// post 방식에서 속성을 읽어 오도록 해주어야함
app.post('/', (req, res)=>{
    // const user = req.body;
    const user = {
        user_id: req.body.user_id,
        user_id: req.body.user_pwd
    }
    console.log(user);
    res.send(user);
})
app.post('/user', (req, res)=>{
    const user = req.body;
    // {user_id: 'html', user_pwd: 'test01'}
    console.log(user);
    res.send(user);
})
app.delete('/', (req, res)=>{
    const delUser = req.body;
    const response = fs.readFileSync('./model/users.json');// 읽고
    const users = JSON.parse(response); // 배열로 바꾸기
    const filter = users.filter(data=>{data.user_id !== delUser.user_id}); // 지우고

    // 쓰고
    fs.writeFileSync('./model/users.json',
        JSON.stringify(filter, null, "   "),
        "utf-8",
        err=>console.log(err)
        );
    // 처리결과를 응답함
    res.send({success: true, message: delUser.user_id + '삭제'});
})
app.put('/', (req, res)=>{
    console.log('4. put');
})
app.listen(app.get('PORT'), ()=>{
    console.log(`sever running on port ${app.get('PORT')}`)
})