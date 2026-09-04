const  path =  require("path");
const  fs   = require("fs");



const FullPath = path.join(__dirname, "Student.text");

///write file
const writeFile =fs.writeFileSync(FullPath,"Ali - 85" , "utf-8" );


///udatefile 

const updateFile =  fs.appendFileSync(FullPath,"Ali is 90" , "utf-8");


///delete file 
// const DleFile = fs.unlinkSync(FullPath);
///read file
const reafFile =  fs.readFileSync(FullPath,"utf-8");
console.log(reafFile);

const fileExsist = fs.existsSync(FullPath);
console.log(fileExsist);

