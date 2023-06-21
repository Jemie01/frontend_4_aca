const {format} = require('date-fns');
const today = new Date();
console.log(today);

const todayFormat = format(today, 'yy-MM-dd hh:mm');
console.log(todayFormat);

// npm이라는 도구로 install하고 사용하고 싶은 모듈 이름 쓰면 됨
// npm i 모듈명 // 설치 => 패키지
// node가 npm 처리 => 패키지 관리 역할