const htpp = require("http");



const server = htpp.createServer((req , res)=>{
      
    if(req.url ==="/"){
 
     res.write("welcnOCME BACK JUNI---------- ");
     res.end();

    }

});

const port = 4000;

server.listen(port, ()=>{ 
      console.log("Listening  .. at 4000");
      
})