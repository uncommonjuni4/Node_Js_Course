
// File Without Extension: server


// Separator: ...
// Absolute Path: ...

//path i create projects / nodejs / backend / server.js

// step1 make path 
const path = require("path");

const FilePath  = path.join("projects","nodejs","backend","server.js");

console.log(FilePath);

const Absolute = path.resolve(FilePath);

console.log(Absolute);

const Basename = path.basename(FilePath);

console.log(Basename);


const extname = path.extname(FilePath);

console.log(extname);

const Diertiory =  path.dirname(FilePath);

console.log(Diertiory);

const pasepartth=path.parse(FilePath);

const parseextion = pasepartth.ext;
console.log(parseextion);

const parsenmae =pasepartth.name;
console.log(parsenmae);

const parsebase =       pasepartth.base;
console.log(parsebase);


const parsedirectoey = pasepartth.dir;

console.log(parsedirectoey);

const sep =  path.sep;

console.log(sep);


const absolute = path.isAbsolute(FilePath);

console.log(absolute);

