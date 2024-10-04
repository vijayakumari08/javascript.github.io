//------value types------//


let num1 = 10;  
console.log(num1);//number
         
let str1 = "Hello";      // String
console.log(str1);

let bool1 = true;        // Boolean
console.log(bool1);

let undef = undefined;    // Undefined
console.log(undef);

let nul = null;          // Null
console.log(nul); 

// ------Reference types-----//

let obj1 = { name: "Alice", age: 25 }; // Object
let arr1 = [1, 2, 3];                  // Array
let func1 = function() { return "Hi!"; }; // Function


let obj2 = obj1; 
obj2.age = 30;   

console.log(obj1); 
console.log(obj2); 


let arr2 = arr1; 
arr2.push(4);     

console.log(arr1); 
console.log(arr2); 

