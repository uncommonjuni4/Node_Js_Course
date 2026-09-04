///crate first path
const path = require("path");
const  fs =  require("fs");
const  filename = "Data.text";

const  fullpath = path.join(__dirname, filename);

const filedata ="Wellcome to Juni Core Eduction Syatm ";

////writeFile

const writeFile = fs.writeFileSync(fullpath,filedata,"utf-8");

console.log(writeFile);


////readfile 

const readFile = fs.readFileSync(fullpath, "utf-8");

console.log(readFile);

//update filed 

const  updateFile = fs.appendFileSync(fullpath,"How are You Juni" , "utf-8");

console.log(updateFile);



///delete  file]

// const deleteFile = fs.unlinkSync(fullpath);