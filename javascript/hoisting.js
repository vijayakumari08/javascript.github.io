            //-----var-Function scoped------//
console.log(a); 
var a = 10;
console.log(a); 

var a = 20;      
console.log(a);  

              //----let-blockscope-----//
console.log(b);  
let b = 10;
console.log(b);  

b = 20;          
console.log(b);  

                //----const-block scope-----//
const e = 50;

if (true) {
  const e = 60;  
  console.log(e);  // Output: 60 (inside block)
}

console.log(e);  // Output: 50 (outside block)



              //----Function declarations----//
greet();  

function greet() {
  console.log("Hello, World!");
}


