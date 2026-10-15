///import event module 
const EventEmitter  = require("events");
////cretae  intantace  for eventEmitter Propteries

const Emit  = new EventEmitter();

Emit.addListener("Greet",()=>{
      console.log("Welcome to Node.js Learning!");
      
    
})


Emit.emit("Greet");

// Emit.addListener("Greet",(Detail)=>{
//     console.log(`My name is ${Detail.name} and  i live in ${Detail.City} and  my Id in Collage is ${Detail.Id}`);
    
// })


// Emit.emit("Greet", {name : "Juni",Id :1,City : "Sahiwal" });