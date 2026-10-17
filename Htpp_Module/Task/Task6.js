// Student Dashboard Server
// Medium+ · 10 Marks

// Is baar ek chhota HTTP server banao, jis mein pichli teeno mistakes repeat nahi honi chahiye.
// Requirements:
// 1. Built-in http module use karo.
// 2. Server port 7000 par run karo.
// 3. Content-Type ko correctly text/html set karo.
// 4. if / else if / else use karo.
// 5. Har page mein <h1> aur <p> use karo.
// 6. Unknown URLs par actual HTTP status 404 return karo.
// 7. Har request ko res.end() se complete karo.
// Expected Browser Preview
// localhost:7000/
// Student Dashboard
// Welcome to Node.js Learning.
// HTTP status: 200

// localhost:7000/courses
// My Courses
// Currently Learning: Node.js
// HTTP status: 200

// localhost:7000/unknown
// 404 - Not Found
// The requested page was not found.
// HTTP status: 404s
// Special Challenge: res.statusCode aur res.setHeader() dono ko response body send karne se pehle set karna hai.
// Is baar browser ke Network tab mein actual HTTP status bhi check karna


const http = require("http");

const Server =  http.createServer((req,res)=>{
    let statuscode;

    if(req.url === "/"){

         res.setHeader("Context-Type", "text/html");
         res.write("<h1> Student Dashboard</h1>");
         res.write("<p>Welcome to Node.js Learning.</p>");
         res.write(`HTTP status:  ${res.statusCode = 200}`)
         res.end();
         
    }
    else if(req.url === "/courses"){

         res.setHeader("Context-Type", "text/html");
         res.write("<h1>My Courses</h1>");
         res.write("<p>Currently Learning: Node.js</p>");
         res.write(`HTTP status:  ${res.statusCode = 200}`)
           res.end();
         
    }else {

        res.setHeader("Context-Type", "text/html");
         res.write("<h1>404 - Not Found</h1>");
         res.write("<p>The requested page was not found.</p>");
         res.write(`HTTP status:  ${res.statusCode = 400}`);
           res.end();
    }
});





const Port = 7000;

Server.listen(Port, ()=>{
    console.log(`Runing at Port : ${Port}`);
    
})