/*
// 회원가입
// /register/post
// /register/confirm: post, get //confirm은 원래 post로 하는게 맞지만 get으로도 가능은 하다
// /register/get: confirm get
// /register/delete
// /register/:id
// /register/put
// /register/:id put

// 로그인
/login/get
/login/post
/logout/get
/logout/post

// 장바구니, product
/product/:id get
/product/get/list
/product/post
/product/delete
/product/put
*/

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 3000; 

app.use(express.static('/public')); // 공유폴더 지정
app.use('/product', express.static(path.join(__dirname, 'model', 'product.json'))); // 공유폴더 지정
app.use(express.json()); // json 포맷 사용
app.use(express.urlencoded({extended:false})); // form 데이터 읽기

// http://localhost:3000
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
// http://localhost:3000/register
app.post('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
})
app.get('/register/confirm', (req, res)=>{})
app.post('/register', (req, res)=>{
    // error 제어
    const newUser = req.body;
    const rows = fs.readFileSync(path.join(__dirname, 'model', 'users.json')); // 읽고
    const users = rows.parse(rows);

    // 기존에 ID, EMAIL 있다면 중복데이터로 처리불가
    const id = users[users.length - 1].id + 1;
    // users.length -1 : 마지막 데이터 인덱스 구하기
    // users[users.length - 1]: 마지막 데이터
    // newUser.id = id; // id 속성을 맨뒤에 추가
    const inputUser = {id , ...newUser}; // id 속성을 맨앞에 추가
    // const inputUser = {...newUser, id}; // id 속성을 맨뒤에 추가
    console.log("newUser:", inputUser);
    users.push(inputUser); // 읽은 데이터 넣기

    fs.writeFileSync(path.join(__dirname, 'model', 'users.json'),
        JSON.stringify(newUser, null, "   "),
        "utf-8",
        err=> console.error(err)
    )
    const res_message = {
        success: 'ok',
        message: '회원가입 완료'
    }
    res.send(res_message);
})
app.delete('/register', (req, res)=>{})
app.put('/register', (req, res)=>{})

// 로그인 화면
app.get('/login', (req, res)=>{
    try{
        res.sendFile(path.join(__dirname, 'views', 'login.html'))
    }catch(err){
        console.log(err);
        res.status(500).send({success: false, message: '내부적오류'})
    }
})
// 로그인 버튼 클릭시
// DB에 id, pwd 존재하면 로그인, err
app.post('/login', (req, res)=>{
    const user = req.body;
    const {user_id, user_pwd} = req.body;
    try{
        const rows = fs.readFileSync(path.join(__dirname, "model", "users.json"));
        const users = JSON.parse(rows);

        users.find(data=>data.user_id === user.user_id && data.user_pwd === user_pwd);
        if(find){
            res.send({success: true, message: user_id})
        }else{
            res.send({success: false, message: '사용자를 찾을 수 없습니다.'})
        }
    }catch(err){
        console.log(err);
        res.status(500).send({success: false, message: '내부적오류'})
    }
})
app.post('/logout', (req, res)=>{})
//app.get('/logout', (req, res)=>{})

app.get('/product', (req, res)=>{
    try{
        res.sendFile(path.join(__dirname, 'views', 'product.html'))
    }catch(err){
        console.log(err);
        res.status(500).send({success: false, message: '내부적오류'})
    }
}) 
app.post('/product', (req, res)=>{})
app.delete('/product', (req, res)=>{})
app.put('/product', (req, res)=>{})

app.listen(PORT, ()=>{
    console.log('lienning port ', PORT);
})