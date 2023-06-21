const str = 'https://www.google.com/search?q=git-scm&oq=&aqs=chrome.1.69i59i450l8.994505477j0j15&sourceid=chrome&ie=UTF-8'
// regExp

// url?query 구분된다.
// url
const url = require('url');
// parse : 문자열을 url 객체로 만들어 주기
// format :  url을 문자열로  만들어 주기
let urlParse = url.parse(str);
// console.log(urlParse);
console.log(urlParse.search);
console.log(urlParse.query);
console.log(urlParse.pathname);
console.log(urlParse.href);

const qs = require('querystring');
// parse :  url에서 ? 뒤의 쿼리를 뽑아내는 것
// stringify :  쿼리를 문자열로  만들어 주기
// query 
// key=value
// const param = qs.parse(str); /// 주소자체는 도메인주소와 path까지 분리
const param = qs.parse(urlParse.query);
console.log("===========param=========");
console.log(param);