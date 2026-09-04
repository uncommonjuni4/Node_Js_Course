const path = require("path");
const  fs = require("fs")

const filepath = path.join(__dirname,"AsynAwait.text");

const createFile = async ()=>{
  try{

      await fs.promises.writeFile(filepath,"Welocme  to async await ","utf-8");
      console.log("Successfulryu");
      
  }catch(eror){
  console.log(eror);
  
  }

}


createFile();

// const readFile = async (dta)=>{
//   try{

//       await fs.promises.readFile(filepath,"utf-8");
//       // console.log("Successfulryu" , dta);
      
//   }catch(eror){
//   console.log(eror);
  
//   }

// }


// readFile();


// const updateFile = async (dta)=>{
//   try{

//       await fs.promises.appendFile(filepath,"new data addes","utf-8");
//       // console.log("Successfulryu" , dta);
      
//   }catch(eror){
//   console.log(eror);
  
//   }

// }


// updateFile();
// const updateFile = async ()=>{
//   try{

//       await fs.promises.unlink(filepath);
//       // console.log("Successfulryu" , dta);
      
//   }catch(eror){
//   console.log(eror);
  
//   }

// }


// updateFile();