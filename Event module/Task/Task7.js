// Online Shopping Order System
// Medium+

// Ek Node.js program banao jo orders receive kare aur order details display kare.
// Requirements:
// 1. EventEmitter import karke object banao.
// 2. Sirf newOrder naam ka event use karo.
// 3. First listener .once() se Order System Started! print kare.
// 4. Second listener .on() se 3 arguments receive kare: customer, product, price.
// 5. Event exactly 2 baar emit karo, dono dafa same event name aur 3 arguments ke saath.
// Expected Output:
// Order System Started!
// Customer: Junaid
// Product: Laptop
// Price: 80000 PKR

// Customer: Ali
// Product: Mouse
// Price: 1500 PKR


// Hints: Dono listeners mein exact newOrder event use karna. .once() sirf first order par chalega, jabke .on() dono orders par chalega.

const EventEmitter = require("events");


const Emit = new EventEmitter();


Emit.once("newOrder", ()=>{
       console.log("Order System Started!");
       
})


Emit.on("newOrder", (customer, product, price)=>{

    console.log(`Customer: ${customer}  \n`);
    console.log(`Product: ${product}  \n`);
    console.log(`Price: ${price} PKR  \n`);
    
})




Emit.emit("newOrder", "Junaid Hassan" , "Laptop" , 80000);
Emit.emit("newOrder", "Ali" , "Mouse" , 1500);