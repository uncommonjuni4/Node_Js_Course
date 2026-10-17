// Fix the HTTP Server
// Medium · 10 Marks

// Is baar sirf 2 pages aur proper error handling banani hai. Main full solution nahi dunga.
// Requirements:
// 1. HTTP server port 6000 par banao.
// 2. Har response mein correct Content-Type: text/html set karo.
// 3. if / else if / else use karo.
// 4. Homepage aur about page banao.
// 5. Kisi bhi unknown URL par HTTP status 404 set karo.
// 6. Har response ko res.end() se complete karo.
// Expected Browser Preview
// localhost:6000/
// Home Page
// Welcome to My Node.js Server.
// HTTP Status: 200

// localhost:6000/about
// About Page
// I am learning Node.js.
// HTTP Status: 200

// localhost:6000/random
// 404 - Page Not Found
// Sorry, this page does not exist.
// HTTP Status: 404

// Har page par <h1> aur <p> use karo. 404 ka status sirf fallback branch mein set hona chahiye.Fix the HTTP Server
// Medium · 10 Marks

// Is baar sirf 2 pages aur proper error handling banani hai. Main full solution nahi dunga.
// Requirements:
// 1. HTTP server port 6000 par banao.
// 2. Har response mein correct Content-Type: text/html set karo.
// 3. if / else if / else use karo.
// 4. Homepage aur about page banao.
// 5. Kisi bhi unknown URL par HTTP status 404 set karo.
// 6. Har response ko res.end() se complete karo.
// Expected Browser Preview
// localhost:6000/
// Home Page
// Welcome to My Node.js Server.
// HTTP Status: 200

// localhost:6000/about
// About Page
// I am learning Node.js.
// HTTP Status: 200

// localhost:6000/random
// 404 - Page Not Found
// Sorry, this page does not exist.
// HTTP Status: 404

// Har page par <h1> aur <p> use karo. 404 ka status sirf fallback branch mein set hona chahiye.


const http = require("http");


const Server =    http.createServer((req , res)=>{
     

    if(req.url === "/"){
        let statuscode = res.statusCode = 200;
        res.setHeader("Context-Type" , "text/html");
        res.write("<h1>Home Page</h1>")
        res.write("<p>Welcome to My Node.js Server.</p>");
        res.write(`Status Code : ${statuscode}`)
        res.end();
    }
   else if(req.url === "/about"){
         res.setHeader("Context-Type" , "text/html");
        res.write("<h1>About Page</h1>")
        res.write("<p>I am learning Node.js.</p>");
         res.write(`Status Code : ${statuscode}`)
        res.end();
    }
    
    else{
         res.setHeader("Context-Type" , "text/html");
        res.write("<h1>404 - Page Not Found</h1>")
        res.write("<p>Sorry, this page does not exist.</p>");
        let code = res.statusCode = 404;
        res.write(`status : ${code}`)
        res.end();
    }
    
});




const Port = 6000;


Server.listen(Port,()=>{
    console.log("running at port 6000");
    
})