import readline from "readline";
import fs from  "fs"; 

const  rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});






const fileCreation = ()=>{

    rl.question("File name ", (filename)=>{
      rl.question("Enter Content!", (filecontent)=>{
        fs.writeFile(`${filename}.text`, filecontent , (error)=>{
         if(error){
        console.error(`${error}`)
         }else{
            console.log(`${filename}.text sucessfulye Created`);
            
         }
        })
      })
    })

}




fileCreation();