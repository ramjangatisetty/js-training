function createPersonObject() {
    var person = {};
    person.firstName = "Ramakrishna";
    person.lastName = "Jangatisetty";
    return person;
}

console.log(createPersonObject());

function createStudentObject(firstName, lastName) {
    var student = {};
    student.firstName = firstName;
    student.lastName = lastName;
    return student;
}

console.log(createStudentObject("Ram", "kris"));

function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var Person = new Employee("Ram", "Krishna");
console.log(Person.firstName);
console.log(Person.lastName);
