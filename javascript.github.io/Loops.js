/*Datatyper in javascript
string
number
undefined
null
object
array
boolean*/
var a='viji'; //string
/*document.write(a);*/
console.log(a)

var a; 
var a=""; //undefined
a; //null

var a=10  //number
console.log(a);

//==array and object==//
 
let fruits=['orange','apple'];
console.log(fruits);//array
console.log(typeof fruits)//object

//==boolean==//

let b=10>20;// boolean
console.log(b);
/*
var a=30;
a++;//increament
var c= 20;
c--;//decrement
document.write('resulet::' ,c)*/

/* varibles in javascript
Let
Var
Const
*/
//==var key word==//

var bun="play" //display two values beacuse of we are using in var key word
console.log(bun);
var bun='sun'
console.log(bun);

//==let key word ==//

let school='nursury'//disply two values using let key word
console.log(school);
 /*let school="primary"
console.log(school)* this one is showing error*/
school="primary"
console.log(school);
//== const key word==//

const group="BE CSE"
console.log(group);
/*const group="nur"
console.log(group)
group='ME'
console.log(group);  this two are showing errors*/


/* Synchronous and Asynchronous  */
//==Synchronous==//
function Synchronous(){
    console.log("Name")
    console.log("Email")
    console.log("Address")
    console.log("phone") 
}
Synchronous();
//==Asynchronous==//
console.log('hello')
setTimeout(function(){
    console.log('viji');
},0);
console.log('R')
setTimeout(function(){
    console.log('Hi!')
},0);
console.log('its am')