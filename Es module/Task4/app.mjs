import studentinfo from "./result.mjs";
import { calculateGrade } from "./result.mjs";


console.log(`${studentinfo("Junaid")}`);
console.log(`Grade : ${calculateGrade(84)}`);

console.log(`${studentinfo("ALi")}`);
console.log(`Grade : ${calculateGrade(70)}`);

console.log(`${studentinfo("Ahmed")}`);
console.log(`Grade : ${calculateGrade(0)}`);
