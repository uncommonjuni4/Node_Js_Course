const  path =  require("path");
const  fs   = require("fs");


const FullPath = path.join(__dirname,"StudentData.text");


//writefile 

const writeFile =fs.writeFileSync(FullPath,"\n Junaid : 88" , "utf-8");

const fileExist = fs.existsSync(FullPath);

if(fileExist){


    console.log(`File exist : ${fileExist}`);
    
    let data = `\n Saad : 85  \n Ali: 98 `;
    const  updateFile  = fs.appendFileSync(FullPath,data, "utf-8");
    const readData = fs.readFileSync(FullPath, "utf-8");
    console.log(`Student Data : \n  ${readData}`);
}else{
    console.log("File Not excist");
    
}

console.log(`File Name : ${path.basename(FullPath)}`);
console.log(`Extension  Name : ${path.extname(FullPath)}`);
console.log(`Dir  Name : ${path.dirname(FullPath)}`);
console.log(`Full Path  Name : ${path.resolve(FullPath)}`);






