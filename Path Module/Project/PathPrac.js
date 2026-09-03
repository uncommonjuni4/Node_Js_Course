// students / junaid / nodejs / practice.js

const { dir } = require("console");
const path = require("path");

/// first create path 

const  filepath = path.join("students","junaid","nodejs","parctice.js");

// console.log(filepath); students\junaid\nodejs\parctice.js

const filenaem =path.basename(filepath);
// console.log(filenaem); //practice.js 

const fileextsion = path.extname(filepath);
// console.log(fileextsion);  ////  .js

const fileDirect =path.dirname(filepath);
// console.log(fileDirect);  // return full path wee make 


const Pasrepath =   path.parse(filepath);

// console.log(Pasrepath); //  retunn object inj wghich root extion name dir nasme , sper nsme 
// console.log(Pasrepath.base);


const resolvePath =path.resolve(filepath);
console.log(resolvePath);



