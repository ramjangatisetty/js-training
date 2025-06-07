var person = {
    "firstName": "Ramakrishna",
    "lastName": "Jangatisetty",
    "fullName": function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log("Dot Notation: " + person.fullName());
console.log("Bracket Notation: " + person["fullName"]());
