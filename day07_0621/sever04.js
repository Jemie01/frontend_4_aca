// http 모듈을 이용해서 서버를 구동시켜보세요
const http = require('http');
const fs = require('fs');
const PORT = 3000;
const path = require('path');

const server = http.createServer();
server.on('request',async(req, res)=>{
    let filePath = path.join(__dirname, 'views', req.url === '/' ? 'ha_swap.html' : req.url);
    // console.log(filePath); // 모든 요청 출력

    let contentType = 'text/html;charset=utf-8';
    let extname = path.extname(filePath);
    
    switch(extname){
        case '.css': contentType = 'text/css'; break;
        case '.jpg': contentType = 'image/jpg'; break;
        case '.png': contentType = 'image/png'; break;
        case '.gif': contentType = 'image/gif'; break;
        case '.js': contentType = 'text/javascript'; break;
        case '.json': contentType = 'application/json'; break;
        case '.mp3': contentType = 'audio/mp3'; break;
        case '.mp4': contentType = 'audio/mp4'; break;
        default: contentType = "text/plan"
    }
    const data = await fs.readFileSync(filePath);
    res.writeHead(200, {'content-type': contentType});
    try{
    // put: localhost:3000/first_name=kim
    // patch: localhost:3000/first_name=kim
    // put 전체 데이터 수정, patch는 일부 데이터 수정할 때
    // 브라우저 <-> 서버
    if(req.url.includes('name') && req.method === 'DELETE'){
        let body = '';
        req.on('data', (chunk)=>{
            body = chunk.toString();
            // 안에서 처리할 수 있음
        })
    }else if(req.url.includes('first_name') && req.method === 'DELETE'){
        // delete: localhost:3000/?first_name=kim
         const url = require('url');
         const queryUrl = url.parse(req.url);
         const query = queryUrl.query;
         console.log(query); // first_name=kim

         const reqQuery = require('querystring');
        //  const params = reqQuery.parse(query);
        //  console.log(params); // {first: 'Jamie01', last: 'park'}
        const {first, last} = reqQuery.parse(query);
        console.log(first, last);

         const users = fs.readFileSync(path.join(__dirname, 'model', 'users.json'));
         users.filter(data => data.first_name !== first);
        }
        req.on('end', ()=>{
            const {first_name, last_name} = JSON.parse(body);
            // console.log(first_name, last_name);
            // first_name => last_name 수정
            // userId를 찾아서 비밀번호만 바꾸기

            const response = fs.readFileSync(path.join(__dirname, 'model', 'users.json'))
            const users = JSON.parse(response);

            // const find = users.find(data=>data.first_name === first_name);
            // 1개 찾기 {}
            // const.log(find)
            // const filter = users.filter(data=>data.first_name !== first_name);
            // 여러개 데이터 찾기 [{}] // !== tkrwpgks epdlxj

            const find = uesrs.find(data=>data.first_name === first_name);
            if(!find){
                const message = {
                    succes: 'false',
                    message: '데이터를 찾을 수 없습니다.'
                }
            }

            find.last_name = last_name ? last_name: find.last_name; // 데이터 변경
            // 첫번째 last가 true면 last_name처리, false이면 find.last_name 처리

            // const index = users.indexOf(find);  // 수정하려는 데이터의 위치
            const filter = users.filter(data=>data.first_name !== find.first_name); // 지우고
            filter.push(find); // 수정된거 추가한거

            fs.writeFileSync(
                path.join(__dirname, 'model', 'users.json'),
            // JSON.stringify(users, null, "    "), // splice 처리시
            JSON.stringify(filter, null, "     "), // filter 처리시
            "utf-8",
            (err)=>{
                console.log(err);
            }
        )
            const message = {
                success: 'ok',
                message: '삭제되었습니다.',
            }
        })
    }catch(err){
        console.log(err);
    }
    
server.listen(PORT, ()=>{
    console.log('listing PORT', PORT);
});

/*
    다음주:
    javascript: document.querySelector()
    jQuery: $()
    node route 매우불편(99%)
    express route
*/});