// Mini Student Portal Server
// Medium+ · 10 Marks

// Is baar pichli mistakes ko correct karte hue ek HTTP server banao. Main full code nahi dunga — tum khud likhoge.
// Requirements:
// 1. http module se server banao.
// 2. Port 5000 use karo.
// 3. Content-Type ko text/html set karo.
// 4. if / else if / else use karo.
// 5. Har page mein <h1> aur <p> dono use karo.
// 6. Unknown URLs par status code 404 return karo.
// 7. Har request ko res.end() se complete karo.
// Expected Browser Output:
// localhost:5000/
// Student Portal
// Welcome to Student Management System.


// localhost:5000/profile
// Student Profile
// Student Name: Junaid


// localhost:5000/anything
// 404 - Page Not Found
// This page does not exist.
// Actual HTTP status: 404


// Hint: req.url, res.setHeader(), res.statusCode, res.end(), if / else if / else.


const http = require("http");


const Server =    http.createServer((req , res)=>{
     

    if(req.url === "/"){
        res.setHeader("Context-type" , "text/Html");
        res.write("<h1>Student Portal</h1>")
        res.write("<p>Welcome to Student Management System.</p>");
        res.end();
    }
   else if(req.url === "/profile"){
         res.setHeader("Context-type" , "text/Html");
        res.write("<h1>Student Profile</h1>")
        res.write("<p>NAme : Junaid Hassan</p>");
        res.end();
    }
    
    else{
         res.setHeader("Context-type" , "text/Html");
        res.write("<h1>404 - Page Not Found</h1>")
        
        let code = res.statusCode = 404;
        res.write(`status : ${code}`)
    }
    
});




const Port = 5000;


Server.listen(Port,()=>{
    console.log("running at port 5000");
    
})