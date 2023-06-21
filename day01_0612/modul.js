// node가 사용하는 모듈
const user = {
    firstname: 'Jamie'
}
const userName = 'hello';
// 외부에서 사용할 거임
module.exports = {userName, user};
// module.exports = {userName: userName, user: user}; name이 똑같아서 생략가능

// 내가 만들수도 있지만
// 이미 개발자가 많이 만들어 둠
// https://www.npmjs.com/
// 자바스크립트 모듈 개발한거 여기다 다 올림
// 검색하고 들어가서 오른쪽 상단에 마우스 올리면 복사 뜨는 거 있는데 그거 클릭해서 js에 복붙 엔터치면 설치됨@