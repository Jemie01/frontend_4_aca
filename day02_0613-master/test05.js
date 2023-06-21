// 모듈
// 1. 내장모듈 : os, fs, path, url, querystring
// 2. 외부모듈 : date-fns
// 3. 사용자모듈 : hello모듈 

const { format } = require('date-fns');
console.log( format(new Date(), 'yyyy-MM-dd'));

/*
*
  - 프로젝트 초기화 
  %npm init -y
  - 프로젝트를 구성하는 모듈 설치 
  %npm i 모듈명  모듈명  모듈명
  설치된 모듈 정보를 pacage.json 에 등록 

 .gitignore : node_modules 폴더 제외하기 
 - 프로젝트 복원
  %npm install 
 
 - 모듈을 지우기 : package.json 항목도 지우고 실제 node_modules에 있는 파일도 지움
  %npm uninstall date-fns 

 - @babel : ECMAScript 

- github push
    파일 만들기
    git init
    git add .
    git commit -m "first commit"
    git branch -M master
    git remote add origin https://github.com/Jemie01/day02_0613.git
    git config --list -> ESC :Q
    git config --global user.name "Jamie"
    git config --global user.email "seventeen0224@gmail.com"
    git push -u origin master
    git status : 상태확인

    // 두번째 부터는 다음 반복
    git add .
    git commit -m "설명(엄청 자세하게 적기)-> test01.console.log, dir, time, timeEnd"
    git commit -m "first commit"
    git log -> commit한 정보 확인할 때
    <여기까지가 내 컴퓨터에서 사용할 때>
    git push -u origin master(해당영역, main)

    git-hub: 리파지토리
    수정
    중복된 코드도 있고
    더 좋은 코드도 있고
    // 남의 컴퓨터일 때 꼭 이메일이랑 이름 지우고 가자 보안이 생명인 직업임 유출 절대 안돼

    
    // git download : 수정해서 재업할 수 없다. 
    // git pull origin 브랜치 -> 수정된 사항 고대로 다시 받기
    
    git add <file>...
    git restore <file>...
    token : 오른쪽 아이콘 > Settings > Developer settings > 
    Personal access tokens > Tokens(classc) >
    Generate new token > repo 선택 하고 하단에서  Generate 버튼 클릭

    

*/