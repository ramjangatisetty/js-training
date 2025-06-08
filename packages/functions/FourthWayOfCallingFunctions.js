function Bicycle(tires, gears, tirePressure) {
    this.tires = tires;
    this.gears = gears;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
        this.tirePressure += 3;
    }
}
var bicycle1 = new Bicycle(2, 2, 10);

function Mechanic(name) {
    this.name = name;
}
console.log(bicycle1);

var mike = new Mechanic("Mike");
mike.inflateTires = bicycle1.inflateTires;
console.log(mike);

mike.inflateTires.call(bicycle1);
console.log(bicycle1)

// mike.inflateTires().call(bicycle1);
// console.log(bicycle1);