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
        
    // localhost:3000 => views/index.html
    if(req.url === '/' && req.method === 'GET'){
        const data = await fs.readFileSync(path.join(__dirname, 'views', 'index.html'));
        res.writeHead(200, {'content-type': contentType});
        res.write(data);
    }// localhost:3000/swap => views.ha-swap.html
    else if(req.url === '/swap' && req.method === 'GET'){
        const data = await fs.readFileSync(path.join(__dirname, 'views', 'ha_swap.html'));
        res.writeHead(200, {'content-type': contentType});
        res.write(data);
    }// localhost:3000/subdir => subdir/index.html
    else if(req.url === '/subdir' && req.method === 'GET'){
        const data = await fs.readFileSync(path.join(__dirname, 'subdir', 'index.html'));
        res.writeHead(200, {'content-type': contentType});
        res.write(data);
    }
    else if(req.url.includes('jpg') || extname.includes('png') || extname.includes('gif')){
        const content = fs.readFileSync(filePath);
        res.end(content);
    }
    else if(req.url.includes('css')){
        // node의 서버로 진행하기 때문에 약간 불편함
        // 2개 이상이면 각각 조건을 여러개 만들어야 함
        const content = fs.readFileSync(path.join(__dirname, 'views', 'script', 'javascript.js'));
        res.end(content);
    }
    res.end();
}
    catch(err){
        console.log(err);
    }
    
server.listen(PORT, ()=>{
    console.log('listing PORT', PORT);
});

/*
    다양한 url
    localhost:3000 => views/index.html
    localhost:3000/swap => views.ha-swap.html
    localhost:3000/subdir => subdir/index.html

    git init
    git branch -M master
    git remote add origin https://github.com/Jamie01/frontend_4.git

    git pull origin master

    수정 후

    git add .
    git config --global user.email" seventeen0224@gmail.com
    git config --global user.name "Jamie01"
    git commit -M "설명"
    git 

    다음주:
    javascript: document.querySelector()
    jQuery: $()
    node route 매우불편(99%)
    express route
*/});