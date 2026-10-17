// Create Your First HTTP Server
// Easy · 10 Marks

// Requirements:
// 1. Node.js ka built-in http module import karo.
// 2. http.createServer() se server banao.
// 3. Callback mein req aur res parameters rakho.
// 4. res.end() se browser ko message bhejo.
// 5. Server ko port 3000 par run karo.
// 6. Terminal par server start hone ka message print karo.
// Expected Browser Output:
// Welcome to My First Node.js Server!


// Expected Terminal Output:
// Server is running on port 3000


// Server start hone ke baad browser mein http://localhost:3000 open karna.
// Hint: require(), http.createServer(), res.end() aur .listen() ki zaroorat hogi.

const http = require("http");

const Server=  http.createServer((req, res)=>{

 if(req.url === "/"){
    
    res.write(" Welcome to My First Node.js Server!");
    res.end();
 }

})



const Port = 3000;

Server.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
})