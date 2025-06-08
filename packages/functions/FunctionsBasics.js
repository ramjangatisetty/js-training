//function without arguments
function sayHello() {
    console.log("Hello");
}
sayHello() //output: "Hello"

//Single Argument
function greeting(name) {
    console.log("Hello! " + name);
}
greeting("Ram");  //output: Hello! Ram


//Multiple Arguments
function greet(firstName, lastName) {
    console.log("Hello: " + firstName + " " + lastName);
}
greet("John", "Doe");  //output: Hello: John Doe

//Two Parameters but calling with single Argument
function printFullName(firstName, lastName) {
    console.log("Full Name: " + firstName + " " + lastName);
}
//calling the function with Both Arguments
printFullName("John", "Doe"); //output: Full Name: John Doe
printFullName("John"); //output: Full Name: John undefined
printFullName("John", "Doe", "Hello") //output: Full Name: John Doe
/*
Observations:
If one of the arguments missed in the function call, the function still executes but the other parameter value is shown as undefined
If an extra argument is given, the function still executes but it ignores the third argument
There is no Overloading concept in JavaScript
*/

//Returning a value from the function:
function addition(a, b) {
    var c = a + b;
    return c;
}

var sum = addition(1,2);
console.log(sum);  //output: 3


