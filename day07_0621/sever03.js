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
    // delete: localhost:3000/first_name=kim
    // delete: localhost:3000/name
    // node로 만드는건 부정확하다 위에 리스트가 다 같은 내용임
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
            console.log(first_name, last_name);

            const response = fs.readFileSync(path.join(__dirname, 'model', 'users.json'))
            const users = JSON.parse(response);

            const filter = users.find(data=>data.first_name !== first_name && data.last_name !== last_name);
            const index = users.includes(find); // 배열에 저장된 번호
            console.log(index); // index = -1 나오면 error임
            users.splice(index, 1);
            // 배열에 저장된 데이터를 삭제
            // 삭제 또는 추가 users.splice(index, 2, 추가내용, 추가내용, ...);
            console.log(users);

            fs.writeFileSync(
                path.join(__dirname, 'model', 'users.json'),
            JSON.stringify(filter, null, "     "),
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