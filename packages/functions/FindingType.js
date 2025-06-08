//Interrogating variable types

var name = "John"; 
console.log(typeof name);  //output: string

var age = 20;
console.log(typeof age);  //output: number

var isMarried = false;
console.log(typeof isMarried);  //output: boolean

var salary = null;
console.log(typeof salary);  //output: object  -> Its a bug, it should ideally return null

var kids;
console.log(typeof kids);  //undefined            
