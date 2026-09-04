const path = require("path");
const fs =   require("fs");

///crreate file

const  FilePath =path.join(__dirname, "Ays.text");

const createFile = fs.writeFile(FilePath,"Welcome Asyn  Fs System" ,"utf-8", (err)=>{
      if(err){
        console.log("error In craetyinh dfiler ");
        
      }else{
        console.log("File Succesully Created ");
        
        
        
const pdateFile = fs.readFile(FilePath,(error, data)=>{
    if(error) console.log("Error");
    else console.log("Data Read" , data.toString());
    
    
} )


const UpdateFile = fs.appendFile(FilePath,"Data U[adte ","utf-8",(err)=>{
    if(err)console.log(err);
    else console.log("Data Sucess fully update ");
    
})

// const  Delfile = fs.unlink(FilePath ,(errr)=> console.log("error"));


      }
});


