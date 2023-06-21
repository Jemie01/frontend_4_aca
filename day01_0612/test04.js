const user = {
    firstname: 'jamie',
    lastname: 'alexer'
}

const {firstname, lastname} = user;
console.log(firstname, lastname);

const {firstname : fn, lastname : ln} = user;
console.log(fn, ln);

const {firstname : fname = 'Na', lastname : lname, age = 30} = user;
console.log(fname, lname, age);
// jamie alexer 30

const userTwo = {
    firstname: 'Na',
    address: {
        zipcode: '239241',
        city: 'seoul'
    }
}
const {address} = userTwo
console.log(address); // 객체

const {address: {city}} = userTwo
console.log(city);

// 디스트릭처럼 
const {x, ...rest} = {x: 1, y: 2, z: 3}
console.log(x, rest);
// 1 { y: 2, z: 3 }