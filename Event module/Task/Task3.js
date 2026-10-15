const EventEmitter = require("events");


const Emit = new EventEmitter();


Emit.on("Greet" ,(name , Age , course)=>{

 console.log("Student Login Succesfullly  \n");
 console.log(`Name : ${name}  \n`);
 console.log(`Age : ${Age}   \n`);
 console.log(`Coruse : ${course}`);
 

})


Emit.emit("Greet", "Junaid Hassan" ,20 ,"Node js");