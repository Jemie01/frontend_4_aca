// const cookieParser = require('cookie-parser');
const expire = require('express');
const fs = require('fs');
const path = require('path');
const model = require('../model/users.json');

const getLogin = (req, res)=>{
    try{
        res.sendFile(path.join(__dirname, '..', 'views', 'login.html'))
    }catch(err){
        console.log(err);
        res.status(500).send({success:false, message : '내부적 오류'})
    }
}

const postLogin = (req, res)=>{
    const user = req.body;
    console.log(req.cookies);  // 쿠키 가져오기

    const { user_id, user_pwd } = req.body;
    try{
        const rows = fs.readFileSync(path.join(__dirname, '..', "model", "users.json" ));
        const users = JSON.parse(rows);

        const find = users.find(data=>data.user_id === user.user_id &&  data.user_pwd === user_pwd );
        if( find ){
            // login된 후에 사용자 인증이 완료되었다고 쿠키를 생성
            // res.cookie('username', `${find.user_id}`,{
            //     maxAge: 5000,
            //     domain: 'example.com',
            //     expires: new Date(),
            //     // httpOnly: true,
            //     // secure: true
            // })

            res.setHeader('set-cookie', `username=${find.user_id}`);
            res.send({ success : true , message : user_id });
        }else{
            res.send({ success : false , message : '사용자를 찾을 수 없습니다.' });
        }
    }catch(err){
        console.log(err);
        res.status(500).send({success:false, message : '내부적 오류'})
    }
}

module.exports = {getLogin, postLogin}

// session 숨겨서 사용
// jwt: 암호화된 토큰을 만들어서 사용