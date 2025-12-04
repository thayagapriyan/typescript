type AddThreeNumbers = (a: number, b: number, c: number) => number;

const add: AddThreeNumbers = (a, b, c) => a + b + c;

const curriedAdd = (a: number) => (b: number) => (c: number) => a + b + c;

const add5 = curriedAdd(5);        // Returns a function: (b) => (c) => 5 + b + c
const add5and10 = add5(10);        // Returns a function: (c) => 5 + 10 + c
const resultA = add5and10(20);     // Returns the final result: 35

console.log(`result: ${resultA}`); // Output: 35