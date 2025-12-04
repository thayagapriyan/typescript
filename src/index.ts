// src/index.ts
import { curry } from "./curry";

function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

const userName: string = "TypeScript User";
greet(userName);