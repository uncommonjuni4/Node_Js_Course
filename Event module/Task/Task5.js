// 1. EventEmitter ka instance banao.
// 2. notification naam ka event use karo.
// 3. First listener mein .once() use karo aur Notification System Started! print karo.
// 4. Second listener mein .on() use karo aur user ko notification message print karo.
// 5. notification event 3 baar emit karo, different messages ke saath.
// Expected Output:
// Notification System Started!
// Notification: Welcome Junaid!
// Notification: Your account is active!
// Notification: You have a new message!


///import event module 
const EventEmitter  = require("events");
////cretae  intantace  for eventEmitter Propteries

const Emit  = new EventEmitter();


Emit.once("notification1", ()=>{
    console.log("Notification System Started!");
    
})

Emit.emit("notification1");
Emit.emit("notification1");  // no run 3nd time 
Emit.emit("notification1");  // no run  3rd time


Emit.on("notification2", (name)=>{
      console.log(`Notification: ${name}!`);
      
})


Emit.emit("notification2", "Welcome JUnaid Hassan");
Emit.emit("notification2" , "Your account is active!");
Emit.emit("notification2","You have a new message!");