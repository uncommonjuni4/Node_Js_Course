import { log } from "console";
import readline from "readline";


const rl = readline.createInterface({

    input : process.stdin,
    output:process.stdout,
})



const todos = [];



const showmenu = ()=>{
 
    console.log('\n 1 : Add a Task');
    console.log(' 2 : View Task');
    console.log(' 3 : Exit');
    rl.question("Chose an Option :" , handleinput)
    
}


const handleinput = (Option)=>{
     
    if(Option === "1"){
        rl.question("Add Task: ",(Task)=>{
          console.log(`\n Task added : ${Task}`);
          todos.push(Task);
          showmenu();
        })
    }else if(Option === "2"){
       
        console.log(`\nYour Tasks :`);

      todos.forEach((vlaue , index)=>{

       
        console.log(`${index+ 1} : ${vlaue}`);
      })

      showmenu();
        
        
    
    } else if(Option === "3"){
          console.log("Good Bye !");
          rl.close();
        }else{
            console.log("invalid Show--Use Correct Option");
            showmenu();
            
        }
     
}



showmenu();