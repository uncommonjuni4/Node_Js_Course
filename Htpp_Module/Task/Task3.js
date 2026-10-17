// HTML Website Server
// Medium+ · 10 Marks

// Sirf Node.js built-in http module use karke 2 HTML pages aur ek 404 response banao.
// Requirements:
// 1. HTTP server port 5000 par run karo.
// 2. res.setHeader() se content type text/html set karo.
// 3. Homepage / par HTML <h1> aur <p> show karo.
// 4. About page /about par HTML <h1> aur <p> show karo.
// 5. Kisi bhi unknown URL par actual status 404 aur error message show karo.
// 6. Har request ko res.end() se complete karo.
// Expected Browser Preview:
// localhost:5000/

// Welcome to My Website
// This is my first HTML page using Node.js.


// localhost:5000/about

// About Me
// I am learning Node.js backend development.


// localhost:5000/anything

// 404 - Page Not Found
// The requested page does not exist.



// Hints: req.url, res.setHeader(), res.statusCode, res.end() aur if / else if / else.






const http = require("http");


const Server =    http.createServer((req , res)=>{
     

    if(req.url === "/"){
        res.setHeader("context-type" , "Text/html");
        res.write("<h1>Welcome to My Website</h1>")
        res.write("Welcome to My Node.js Website!");
        res.end();
    }
    if(req.url === "/about"){
         res.setHeader("context-type" , "Text/html");
        res.write("<h1>About Me</h1>")
        res.write("This is my About Page!");
        res.end();
    }
    if(req.url === "/contact"){
          res.setHeader("context-type" , "Text/html");
        res.write("<h1>Contact Me</h1>")
        res.write(" Contact me at example@gmail.com");
        res.end();
    }
    if(req.url === "/xyz"){
         res.setHeader("context-type" , "Text/html");
        res.write("<h1>404 - Page Not Found</h1>")
        res.write("404 - Page Not Found");
        res.end();
    }
    
});




const Port = 4000;


Server.listen(Port,()=>{
    console.log("running at port 4000");
    
})