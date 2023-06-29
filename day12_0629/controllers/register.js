const fs = require('fs');
const path = require('path');

const getRegister = (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'register.html'));
}

const getIdRegister =  (req, res)=>{
    const {id} = req.params;  
    const rows = fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json'));
    const users = JSON.parse(rows);

    const find = users.find(data=>data.id === Number(id) ); 
    if( find ){
        res.send({ success: true, message : find })
    }else{
        res.send({ success: true, message : "데이터를 찾을 수 없습니다." })
    }
}
const getConfirm = (req, res)=>{
    res.send('register/confirm')
}
const postRegister = (req, res)=>{
    // error 제어 제외 
    const newUser = req.body; 
    const rows =  fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json')); // 읽고
    console.log( rows )
    const users = JSON.parse(rows);

    //기존데이타에 중복되는 아이디 존재하는 확인 후 
    // 존재하면 새로운 아이디로 유도 // 존재하지 않으면 가입 
    const find = users.find(data=>data.user_id === newUser.user_id);
    if(find){
        console.log({success: false, message : '이미 존재하는 아이디입니다.'})
        res.send({success: false, message : '이미 존재하는 아이디입니다.'})
    }else{
        // 기존에 id, email 있다면 중복데이터로 처리불가 
        const id = users[users.length - 1].id + 1;
        // users.length - 1 :마지막 데이타 인덱스
        // users[users.length - 1] : 마지막 데이타
        // newUser.id = id; // id속성을 맨뒤에 추가 
        const inputUser =  {id , ...newUser}  // id 속성을 맨앞에 추가
        // const inputUser =  {  ...newUser, id}  // id 속성을 맨뒤에 추가
        // console.log("newUser : ", inputUser ); 
        users.push( inputUser ); // 읽은 데이터이 넣기

        fs.writeFileSync(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(users, null, "  "),
            'utf-8',
            err=> console.error(err)
        )

        const res_message = {
            success : 'ok',
            message : '회원가입 완료'
        }
        res.send( res_message );
    }// if else end 
    
}
const delRegister = (req, res)=>{
    // id를 전달 받아서 id와 같은 데이터가 있다면 정상적으로 삭제
    // id를 전달 받아서 id와 같은 데이터가 없다면 에러
        try{
            const user = req.body; 
            const rows = fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json'));
            const users = JSON.parse(rows);
    
            const find = users.find(data=>data.user_id === user.user_id && data.user_pwd === user.user_pwd);
            if( !find ){
                res.send({ success: false, message : '사용자가 존재하지 않습니다. '})
            }else{
                const index = users.indexOf(find);
                users.splice(index, 1); // 원본 수정, 리턴은 삭제된 값
    
                fs.writeFileSync(
                    path.join(__dirname, '..', 'model', 'users.json'),
                    JSON.stringify(users, null, '  '),
                    "utf-8",
                    err=>console.log(err)
                )
                res.send({ success: true, message : '삭제하였습니다. '})
            }
        }catch(err){
            console.log(err)
        }
    }
const delParamRegister = (req, res)=>{
    try{
        const {id} = req.params; // url, body 등로 전달받은 모든 데이터는 문자열 
        // console.log('params route', id); // string
        const rows = fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json'));
        const users = JSON.parse(rows);

        const find = users.find(data=>data.id === Number(id) ); /// 데이타 타입은 항상 주의
        //                              숫자      숫자(문자열)
        if( !find ){
            res.send({ success: false, message : '사용자가 존재하지 않습니다. '})
        }else{
            const index = users.indexOf(find);
            users.splice(index, 1);

            fs.writeFileSync(
                path.join(__dirname, '..', 'model', 'users.json'),
                JSON.stringify(users, null, '  '),
                "utf-8",
                err=>console.log(err)
            )
            res.send({ success: true, message : '삭제하였습니다. '})
        }
    }catch(err){
        console.log(err)
    }


}
const putRegister = (req, res)=>{
    // 수정할 데이터를 전달 받아서 // 찾아서 // 수정 후 // 다시 저장
    const user = req.body; 
    // 수정할 수 없는 데이터 :  user_id, 이름, email, 수정할 데이터는 : user_pwd, 닉네임

    const rows = fs.readFileSync(path.join(__dirname, '..', 'model', 'users.json'));
    const users = JSON.parse(rows);
    const find = users.find(data=>data.user_id === user.user_id );
    //if(!find)  res.send({ success: true, message : '아이디를 확인하세요. '});
    const index = users.indexOf(find);

    const newUser = {id: find.id,  user_id : user.user_id, user_pwd : user.user_pwd ? user.user_pwd : find.user_pwd}
    // 수정할 데이터를 입력했다면 수정하고
    // 그렇지 않으면 원래 데이터를 입력하세요.

    users.splice( index, 1, newUser ); //지운 위치에 새로 삽입

    fs.writeFileSync(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(users, null, '  '),
        "utf-8",
        err=>console.log(err)
    )
    res.send({ success: true, message : '수정하였습니다. '})
}

module.exports = {
    getRegister, postRegister, putRegister, delRegister, getIdRegister, getConfirm, delParamRegister
}