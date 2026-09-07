///import htpp 
const http = require("http");



const server= http.createServer((req,res)=>{
    ``
      if(req.url  === "/"){
        req.write("Welcome back Juni Bhi");
        res.end();
      }
});




const port = 3000;


server.listen(port ,()=>{
      console.log("Listening At 3000 Port ");
      
})
