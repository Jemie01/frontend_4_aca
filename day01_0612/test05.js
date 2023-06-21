// ... spread(전개) 연산자
// 배열, 객체, 함수 구조를 깨서 펼치는 용도

console.log([1, 2, 3]); //[ 1, 2, 3 ]
console.log(...[1, 2, 3]); //1 2 3

console.log('Hello'); // Hello
console.log(...'Hello'); // H e l l o

const ary = [1, 2, 3];
// 최대값 구하기
// Math.max(1, 2, 3); 원래의 방식
let maxNum = 0;
ary.forEach(maxNum => {
    if(data){
    maxNum = data;
}})
console.log(maxNum);
const maxNum2 = Math.max(...ary);
console.log(maxNum2);

// 같은 주소를 사용하므로 원본도 수정되거나 지워지거나 발생
// function spreadHandle(rest){
//     rest[0] = 'hello'
//     console.log(rest); // [1, 2, 3];
// }
// spreadHandle(ary);
// console.log(ary);

function spreadHandle(...rest){
    rest[0] = 'hello'
    console.log(rest); // [1, 2, 3];
}
spreadHandle(...ary); // ['hello', 2, 3]
console.log(ary);     // [1, 2, 3]

const twoAry = ary;
const threeAry = [...ary];
ary[0] = 'javascript';
console.log(twoAry); // ['javascript', 2, 3]
console.log(threeAry); // [1, 2, 3]
console.log(ary); // ['javascript', 2, 3]


console.log(twoAry === ary)
console.log(threeAry === ary)