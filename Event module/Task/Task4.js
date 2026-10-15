// Student Registration System
// Medium+

// Ek Node.js program banao jisme ek hi event se 2 different listeners execute hon.
// Requirements:
// 1. EventEmitter import karke instance banao.
// 2. register naam ka event banao.
// 3. First listener student ka name aur email print kare.
// 4. Second listener registration success ka message print kare.
// 5. .emit() sirf ek baar call karo aur usmein student ka naam aur email pass karo.
// Expected Output:
// Student Name: Junaid
// Student Email: junaid@gmail.com
// Registration Successful!
// Welcome Junaid

const EventEmitter = require("events");

const Emit  = new EventEmitter();

Emit.on("register" , (name , email)=>{
       console.log(`Student Name : ${name}  \n`);
       console.log(`Student Email : ${email}  \n`);
       
})


Emit.on("registration" , ()=>{
    console.log("Student Login Succesfullly");
})


Emit.emit("register" , "Juniad Hassan" , "Chjunaidhassan95@gmail.com");
Emit.emit("registration");
