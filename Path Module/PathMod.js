////first create path with hrlp of jion
const { log } = require("console");
const path = require("path");
const filepath = path.join("pathModule" ,"Pathmod.text");

// console.log(filepath);


const pathjion = path.join(filepath);
console.log(pathjion);
const parsepath = path.parse(filepath);
console.log(parsepath);


const resslovepath = path.resolve(filepath);
console.log(resslovepath);
const extnaem =path.extname(filepath);
console.log(`Exstion Name  : ${extnaem}`);

const baseName = path.basename(filepath);
console.log(`Base Name  : ${baseName}`);

const directiry = path.dirname(filepath);

console.log(`Directory  Name  : ${directiry}`);
const spertor= path.sep;

console.log(`Sepertor Name  : ${spertor}`);