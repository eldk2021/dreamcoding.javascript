'use scrict';

//console은 Web apis 브라우저가 제공하는 함수
//Web APIs > console API
console.log("Hello world!");

//2. Variable, rw(read/write)
//let added in ES6
//var 사용하지 말 것.
// let const

//3. Constant -immutable r(read, only)
const daysInWeek = 7;
const maxNumber = 9;


//4. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function

const count = 17; //number
const size = 17.1; //decimal number
console.log(`value:${count}, type: ${typeof count}`);
console.log(`value:${size}, type: ${typeof size}`);

//Infinity, -Infinity, NaN
//bigInt (fairly new, 4년전 추가됨)
//string
//template literals (backtick, ${})

//boolean
//false: 0, null, undefined, NaN, '', false, 0n, -0

//symbol, create unique identifiers for objects

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
//=> 객체 새로 만드는 듯 new

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
//=> 참조 객체로 만드는 듯, 그냥 string
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //출력시 .description 써야함

//object, 
const connie = {name: 'connie', age: 20};
connie.name = 'john';
console.log(`connie: ${connie.name}`);





