const  heading = require('./heading');

const  math = require('./math');

const  subjects = require('./subject');

const [subject1 , subject2 , subject3 , subject4] = subjects;

console.log(`Welcome bacK ${heading("Junaid hassan")}`);

console.log(`My subjects  :`);

console.log(`Subject 1 : ${subject1("C++")}`);
console.log(`Subject 2 : ${subject2("Web Development")}`);
console.log(`Subject 3 : ${subject3("Node js")}`);
console.log(`Subject 4 : ${subject4("Pyton")}`);

console.log("Calculator Results :");
console.log(`Add : ${math.add(10,10)}`);
console.log(`Sub : ${math.sub(10,10)}`);
console.log(`Multiplication : ${math.multi(10,10)}`);
console.log(`Divsion: ${math.div(10,10)}`);



