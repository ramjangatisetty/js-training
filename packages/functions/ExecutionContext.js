//the reference 'this' will be created when the function executes, and this reference will be global object when you 
//execute the function directly
//if you are excuting from browser, it will be window object and if you are executing it from Node.JS it will be global object

function greet() {
    console.log("Hello");
    console.log(this); //output: global {global: global, clearImmediate: ƒ, setImmediate: ƒ, clearInterval: ƒ, clearTimeout: ƒ, …}
}
greet();

var obj = {}
obj.name = "Ram";
obj.greet = function() {
    console.log("hello");
    console.log(this);      //output: {greet: ƒ} - This reference will be the object within the function
    console.log(this.name);
}

obj.greet();

function Person(name) {
    this.name = name;
    console.log(this);
}

var person1 = new Person("Ram")
