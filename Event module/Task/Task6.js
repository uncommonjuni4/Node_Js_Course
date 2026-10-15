// Login Tracking System
// Medium+

// Ek Node.js program banao jisme user multiple times login kare, lekin system startup message sirf ek baar aaye.
// Requirements:
// 1. EventEmitter import karke instance banao.
// 2. Sirf userLogin naam ka event use karo.
// 3. First listener mein .once() use karke Login System Initialized! print karo.
// 4. Second listener mein .on() use karke user ka naam aur login count print karo.
// 5. .emit() exactly 3 baar call karo, teeno baar userLogin event trigger ho.
// 6. Teeno login events mein same name Junaid aur counts 1, 2, 3 pass karo.
// Expected Output:
// Login System Initialized!
// User: Junaid | Login Count: 1
// User: Junaid | Login Count: 2
// User: Junaid | Login Count: 3


// Hint: Dono listeners ko userLogin event par register karna hai. .emit() mein 2 arguments pass karne hain.

const EventEmitter = require("events");

const Emit  = new EventEmitter();




Emit.once("userLogin", ()=>{
    console.log("Login System Initialized!");
    
});


// Emit.on("userLogin", (name , count)=>{

//        console.log(`User : ${name} | Login cout : ${count}`);
       
// })





// Emit.emit("userLogin" , "Junaid Hassan" , 1);
// Emit.emit("userLogin" , "Junaid Hassan" , 2);
// Emit.emit("userLogin" , "Junaid Hassan" , 3);



// Emit.once("userLogin", () => {
//   console.log("Login System Initialized!");
// });

Emit.on("userLogin", (name, count) => {
  console.log(`User: ${name} | Login Count: ${count}`);
});

Emit.emit("userLogin", "Junaid", 1);
Emit.emit("userLogin", "Junaid", 2);
Emit.emit("userLogin", "Junaid", 3);
