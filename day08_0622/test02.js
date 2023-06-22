const str = `
<div class="popup-contents" id="pop_cont" style="top:50%;width:650px;margin:-258px 0 0 -325px; display:none; z-index:999">
</div>
`

const firstDel = str.substring(2, str.length-1);
console.log(firstDel);
const lastDel = firstDel.substring(0, firstDel.length-1);
console.log(lastDel);
const reStr1 = lastDel.replace(">", ""); // >를 공백으로 바꾸기
console.log(reStr1);

const reStr = lastDel.replace('class', 'test');
console.log(reStr);

const attrAry = reStr.split("  ");
console.log(attrAry);

// string 문자열 조작: 다소 옛날 방식
// 최근 방식 regExp: 정규표현식(문자열 처리하는 새로운 언어)
// 하루만 분리해서 공부할거임 다음주에~