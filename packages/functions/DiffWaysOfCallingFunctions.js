/*
1. Regular Mode
2. Calling the function in the context of object
3. Constructor Way
*/


function greet() {
    console.log("Hello");
}
greet();  //Method #1 - Executing the function as is


var obj = {};
obj.greet = function() {
    console.log("Hello");
}
obj.greet();  //Method #2 - Executing the function as a property of an object

new greet();  //Method #3 - Executing the function in the constructor way