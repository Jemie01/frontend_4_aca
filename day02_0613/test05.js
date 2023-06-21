// 모듈
// 1. 내장모듈: os, fs, path, url, querystring
// 2. 외부모듈: date-fns
// 2. 사용자모듈: hello 모듈

const {format} = require('date-fns');
console.log(format(new Date(), 'yyyy-mm-dd'));

/* 
$ npm init: 이니셜 초기화 머 설치하기 전에 한번 해줌

- 프로젝트 초기화
%npm init -y
- 프로젝트를 구성하는 모듈 설치
%npm i 모듈명 모듈명 모듈명
설치된 모듈 정보를 package.json에 등록
.gitignore: node_modules 폴더 제외하기 -> github에 올릴 때
- 프로젝트 복원
%npm install
- 모듈을 지우기: package.json 항목도 지우고 실제 node_modules에 있는 파일도 지움
%npm uninstall date-fns

- @babel: ECMAScript -> js 호환

node js 직접창에서 npm install을 쳐서 밑에 있는 정보에 쓰인 npm 사용가능
원래 node_modules 폴더는 가져가는거 아니라 했잖음 제외하고 공유해야한다고

- github push
echo "# day02_0613" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main(master)
git remote add origin https://github.com/Jemie01/day02_0613.git
git config --list -> ESC :Q
git config --global user.name "Jamie01"
git config --global user.eamil "seventeen0224@gmail.com"
git push -u origin main(master)
git status: 상태확인

git add <file>...
git restore <file>...
token: 프로필 누르고 settings에 가서 맨밑에 들어가면 token나옴(Developer settings)>personal access tokens>Tokens(classcic)
Generate new tokens
*/

// 엉망이네.. 나 npm 오류 걸려서 못했구, git hub도 다시 설치해야함~~
// convert to Github을 token(clasic)으로 함 -> 토큰은 잘 저장해야함
// 다시 볼 수 없걸랑 근데 여기 git에 저장되어 있으면 보안에 취약하다고 안되니까 밖에 둘게 