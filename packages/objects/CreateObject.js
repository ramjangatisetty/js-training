/*objects are not class based in Java Script
free form - not bound to a class
Object literal notation can be used to create object
Object properties can be accessed directly - no private
new properties can be added to object directly
Objects can have methods*/

var myobj = {};  //creating an object inline
console.log(myobj); //output: {}

//Adding properties to the object
myobj.prop1 = "Hello";
console.log(myobj);  //output: {prop1: 'Hello'}

//Accessing object properties
console.log(myobj.prop1);  //output: Hello

//creating an object inline with some properties and adding additional properties once the object is created

var person = {
    "firstName": "John",
    "lastName": "Doe"
};
console.log(person);  //output: {firstName: 'John', lastName: 'Doe'}

person.age = 20;
person.isMarried = false;  

console.log(person);  //output: {firstName: 'John', lastName: 'Doe', age: 20, isMarried: false}

//if you access a property which is not defined for the object, 

console.log(person.city);  //output undefind



