// Must add  data types with the variable declaration.

//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

//String
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
 
I'll be ${age + 1} years old next month.`;

//Array
let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

//Tuple

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
//Type 'number' is not assignable to type 'string'.
//Type 'string' is not assignable to type 'number'.

// OK
console.log(x[0].substring(1));
 
console.log(x[1].substring(1));
Property 'substring' does not exist on type 'number'.
