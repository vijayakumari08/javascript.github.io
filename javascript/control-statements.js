//--If statement--//
const  num=10;
if(num>4){
    console.log("The number is positive")
};

//--If-Else statement--//
let name= "viji";
if(true)
    console.log("The name is true");
else
    console.log("The name is false");

    //--Switch statement--//
    let grade = "A";

    switch (grade) {
      case "A":
      case "B":
        console.log("Well done! You passed.");
        break;
      case "C":
        console.log("Good effort! You passed.");
        break;
      case "D":
        console.log("You passed, but consider studying harder.");
        break;
      case "F":
        console.log("You failed. Try again.");
        break;
      default:
        console.log("Invalid grade.");
    }

    //--For loop--//
    let fruits = ["Apple", "Banana", "Orange", "Mango"];

    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
    