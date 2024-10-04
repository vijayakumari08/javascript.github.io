//---number---//
let x=5;
let y=10;
console.log(x+y);

//--string--//
let str1="hi";
let str2="hello";
let str3=str1+str2;
console.log("welcome:"+str3);

//--boolean--//
let red=5;
let blue=10;
let isEqual=(red===blue);
console.log(isEqual);

//--null--//
let a;
let b=null;

console.log(a);
console.log(b);
console.log(a===null);
console.log(b===null);

//--undefined--//
function doNothing(){}
    let result=doNothing();
    console.log(result);

//--symbol--//
const uniqueKey=Symbol('unique');
    const obj={
        [uniqueKey]:'value'
    };
console.log(obj[uniqueKey]);

//--object--//
let school={
    name:"Vivekanandh School"};
   console.log(school.hasOwnProperty("name"));
   console.log(school.hasOwnProperty("toString"));

//--Arrays--//
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matrix[1][2]);  
  