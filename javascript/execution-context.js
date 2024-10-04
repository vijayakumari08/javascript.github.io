// Global Execution Context
var x = 10;  // Global variable

function outerFunction() {
    var y = 20;  // Variable in outerFunction's execution context

    function innerFunction() {
        var z = 30;  // Variable in innerFunction's execution context
        console.log(x);  // Can access global variable
        console.log(y);  // Can access outerFunction variable
        console.log(z);  // Can access innerFunction variable
    }

    innerFunction();  // Calling innerFunction creates its own execution context
}

outerFunction();  // Calling outerFunction creates its own execution context


