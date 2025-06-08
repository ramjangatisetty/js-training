function sum(a, b) {
    console.log(arguments)
    var c = a + b;
    return c;
}

console.log(sum(1, 2)); //output: Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]    3

console.log(sum(1,2,3,4,5,6,7,8,9,10)) //output: Arguments(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]


function sumArguments() {
    console.log(arguments);
    var length = arguments.length;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumArguments(1,2,3,4, 10, 11, 12)); //output: Arguments(7) [1, 2, 3, 4, 10, 11, 12, callee: ƒ, Symbol(Symbol.iterator): ƒ]  43

