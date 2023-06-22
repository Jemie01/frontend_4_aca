const fs = require('fs');
// frontend(javascript), back(node.js)

const data = fs.readFileSync('./data/seafood.CSV', 'utf-8');
// console.log(data);

const lines = data.split('\n');
// console.log(lines.slice(0, 10));

const title = lines.slice(0, 1); // 제목만 가지기
// const titleAry = title.split(',');
console.log(title);
const lines10 = lines.slice(0, 10);

const mLines = []
lines.forEach(line => {
    const str = line.substring(1, line.length - 1); // ' 등을 잘라낼 수 있다
    mLines.push(str);
})

// console.log(mLines);
const objectAry = []
mLines.forEach(line=> {
    const ary = line.split(",");
    let object = {
        // user: 'kim
    }
    // object.user = kim // 속성명을 정확히 알고 있을 때
    // object['user'] = kim // 속성명을 정확히 모르고 내가 속성명을 만들 때
    ary.forEach((data, index)=>{
        // object[`key${index}`] = data;
        // object.titleAry.index 이렇게 못쓰니까 밑에처럼 쓰는거임
        object[`${titleAry[index]}`] = data;
    })
    objectAry.push(object);
})
console.log(objectAry);

fs.writeFileSync('./data/seafood.CSV',
    JSON.stringify(objectAry, null, "    "),
    "utf-8",
    err => console.log(err));