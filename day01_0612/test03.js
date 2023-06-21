// 배열
const [a, b] = [1, 2];
console.log(a, b);

const [c, d] = [3]; // 3, undefined // 모자라면 정의되지 않음
console.log(c, d);

const [e, f] = [4, 5, 6]; // 4, 5 // 남는 것은 문제되지 않음
console.log(e, f);

const [g, , i] = [7, 8, 9]; // 7, 9 // 순서대로 있어서 중간을 생략할 수 있음
console.log(g,i);

const [j, k, l=12] = [10, 11]; // 10, 11, 12 
// 기본값은 전달되는 값이 없으면 사용하지만 있으면 전달된 값 사용
console.log(j, k, l);

const [m, ...other] = [13, 14, 15]; // 13 [ 14, 15 ] // ...: 나머지 연산자, 스프레드 연산자
console.log(m, other);