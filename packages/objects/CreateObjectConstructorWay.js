//When you call a function in a constructor way, Java Script interpretor adds couple of statements in to the function,
//one at the beginning and one at the end
// beginning ->   var this = {};
// end -> return this;
// there is nothing that function can tell whether you should be calling it constructor way  or normal function call
// it's just the convention that is followed while creating the functions
// if it is a normal function you can use normal function call otherwise if it is returning an object one needs to you new keyword

function Bicycle(cadence, speed, gear) {
    //var this = {}
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    //return this
}

var bicycle1 = new Bicycle(20, 40, 4);
console.log(bicycle1);
console.log(bicycle1.speed)
var bicycle2 = new Bicycle(10, 20, 30);
console.log(bicycle2);


/*
What happens when you call a normal function in a constructor way?
Lets create a function that returns an object and call it in constructor way.
*/

function createPerson(firstName, lastName, age) {
    var person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    return person;    
}

//Now call it in constructor way
var person1 = new createPerson("Ram", "Kris", 25);

//when you call the the function in the constructor way, Java interpretor keeps two statements line 42 and line 48
function createPerson(firstName, lastName, age) {
    this = {}
    var person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    return person;
    return this; 
}

/*
Now understand what is happening here: this statement is added and it is being executed, then you are not using it,
next person variable is created and assigned with empty object.
Then properties and values are added.
then person object is returned, this is where function ends, return this statement wont be executed.
so if a function called in a constructory way it will still work.
*/

//What happens when a function created in the constructor way and you are calling it in a normal way.

function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var person3 = Person("John", "Doe", 20); 
console.log(person3) //output: undefined

/* what is the value of this, since it is not initialized with in constrctor, it is referring to global object, you are adding
properties and values to global object. at the end you are not return any thing as there is no Return.
There is no object returned, the variable you are using to store the value will not have any thing. in that case the value 
that you used returns undefined.

*/






