// Create a Mini Website Server
// Medium · 10 Marks

// Sirf Node.js ke built-in http module se ek server banao.
// Requirements:
// 1. http module import karo.
// 2. http.createServer() se server banao.
// 3. Server port 4000 par run karo.
// 4. req.url check karke different responses bhejo.
// 5. Har request ke liye res.end() zaroor execute hona chahiye.
// Expected Browser Outputs:
// URL 1
// localhost:4000/

// Welcome to My Node.js Website!




// URL 2
// localhost:4000/about

// This is my About Page!




// URL 3
// localhost:4000/contact

// Contact me at example@gmail.com




// Other URL
// localhost:4000/xyz

// 404 - Page Not Found




// Hints: req.url, if, else if, else, res.end() aur server.listen() use kar sakte ho.
// Extra challenge: Unknown URL ke liye res.statusCode = 404 bhi set karo.


const http = require("http");


const Server =    http.createServer((req , res)=>{
     

    if(req.url === "/"){
        res.write("Welcome to My Node.js Website!");
        res.end();
    }
    if(req.url === "/about"){
        res.write("This is my About Page!");
        res.end();
    }
    if(req.url === "/contact"){
        res.write(" Contact me at example@gmail.com");
        res.end();
    }
    if(req.url === "/xyz"){
        res.write("404 - Page Not Found");
        res.end();
    }
    
});




const Port = 4000;


Server.listen(Port,()=>{
    console.log("running at port 4000");
    
})