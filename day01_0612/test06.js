const obj = {x: 1, y: 2}
const copyone = obj;
const copytwo = {...obj};
copyone.x = "hello";

console.log(obj === copyone); // true
console.log(obj === copytwo); // false
console.log(obj); // {x: "hello", y: 2}
console.log(copyone); // {x: "hello", y: 2}
console.log(copytwo); // {x: 1, y: 2}

const merge = {a: 3, b: 4, ...obj}; // { a: 3, b: 4, x: 'hello', y: 2 }
console.log(merge); // 기존에 있던 객체에 새로운 객체 추가됨

// Object.assign(); 객체 복사
// Object.keys(); 객체의 키 값만 배열로 만듬
// Object.values(); 객체의 value 값만 뽑아서 배열로 만듬
// Object.entries() ; {키, value} 배열로 만듬

const keys = Object.keys(merge);
console.log(keys) // [ 'a', 'b', 'x', 'y' ]

const values = Object.values(merge);
console.log(values) // [ 3, 4, 'hello', 2 ]

const entries = Object.entries(merge);
console.log(entries) // [ [ 'a', 3 ], [ 'b', 4 ], [ 'x', 'hello' ], [ 'y', 2 ] ]

const copyObj = Object.assign(merge);
console.log(copyObj === merge); // true
console.log(copyObj); //{ a: 3, b: 4, x: 'hello', y: 2 }
// 다른 주소를 사용해서 원본이나 사본이 수정되었을 때 서로 영향 없이 사용하도록 함
// 얕은 복사: 영향이 있음
copyObj.a="javascript";
console.log(merge);
// 영향이 없도록 하기위한 모듈: __lowdash
// 같은 주소를 바라보지 않도록 만들어 주는 모듈