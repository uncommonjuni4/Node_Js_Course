const path = require("path");
const fs  = require("fs");


const filePath = path.join(__dirname,"Promise.text");


//creat file 

fs.promises.writeFile(filePath,"Thsi is intial data ","utf-8")
.then(console.log("File SyucessFuly created"))
.catch((errr)=> console.log(errr))


fs.promises.readFile(filePath,"utf-8")
.then((data) => console.log(data))
.catch((eror)=> console.log(eror))


fs.promises.appendFile(filePath,"\nThsi is intial dtaws 2 ","utf-8")
.then(console.log("File SyucessFuly created"))
.catch((errr)=> console.log(errr))

// fs.promises.unlink(filePath)
// .then(console.log("File SyucessFuly Dleye "))
// .catch((errr)=> console.log(errr))


