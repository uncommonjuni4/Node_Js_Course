// \Node.js Student Management Server
// Final · 10 Marks

// Sirf built-in http module use karke ek mini student management website banao.
// Requirements:
// 1. Server port 8000 par run karo.
// 2. Har response mein Content-Type: text/html set karo.
// 3. if / else if / else use karo.
// 4. Teen pages banao: Home, Students aur Courses.
// 5. Unknown URL par actual HTTP status 404 do.
// 6. Status code response body se pehle set karo.
// 7. Har request mein res.end() zaroor call ho.
// 8. Har page par <h1> aur <p> use karo.
// Expected Browser Output
// localhost:8000/
// Student Management System
// Welcome to Node.js Backend.
// HTTP 200

// localhost:8000/students
// Students Page
// Total Students: 50
// HTTP 200

// localhost:8000/courses
// Courses Page
// Available Course: Node.js
// HTTP 200

// localhost:8000/random
// 404 - Page Not Found
// Sorry, this page does not exist.
// HTTP 404

const http = require("http");

const Server =  http.createServer((req,res)=>{
    let statuscode;

    if(req.url === "/"){
        
          res.statusCode = 200;
         res.setHeader("Content-Type", "text/html");
         res.write("<h1>Student Management System</h1>");
         res.write("<p>Welcome to Node.js Backend.</p>");
         res.write(`HTTP status:  ${res.statusCode}`);
         res.end();
         
    }
    else if(req.url === "/students"){

          res.statusCode = 200;
         res.setHeader("Content-Type", "text/html");
         res.write("<h1>Students Page</h1>");
         res.write("<p>Total Students: 50</p>");
         res.write(`HTTP status:  ${res.statusCode}`);
         res.end();
         
    }
    else if(req.url === "/courses"){
  res.statusCode = 200;
         res.setHeader("Content-Type", "text/html");
         res.write("<h1>Courses Page</h1>");
         res.write("<p>Available Course: Node.js</p>");
         res.write(`HTTP status:  ${res.statusCode}`);
         res.end();
         
    }
    else {

        res.statusCode= 404;

        res.setHeader("Content-Type", "text/html");
         res.write("<h1>404 - Not Found</h1>");
         res.write("<p>The requested page was not found.</p>");
         res.write(`HTTP status:  ${ res.statusCode}`);
           res.end();
    }
});





const Port = 8000;

Server.listen(Port, ()=>{
    console.log(`Runing at Port : ${Port}`);
    
})