import https from "https";

import readline from "readline";
import { createUnzip } from "zlib";



const finalRate = (amount , currenyCode, rates)=>{
    
    const Code = rates[currenyCode.toUpperCase()]

    if(!rates) return null;
    

    return (amount * Code);

}

const rl = readline.createInterface({
 
    input : process.stdin,
    output: process.stdout

})


const apiKey = "b99d8d5d043059587d0afae2";

const url  = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;


https.get(url, (response)=>{
    let data = "";
     response.on("data" , (chunk)=>{
         
        data +=chunk;


     })

     response.on("end", ()=>{
        const rates = JSON.parse(data).conversion_rates;

        rl.question("How much amount you want to Convert to usd :", (amount)=>{

              rl.question("Enter Currency code : " , (currenyCode)=>{


                if(rates){
                    console.log(`The amount ${amount} usd is  appromiatlye ${finalRate(amount , currenyCode , rates)} in ${currenyCode}`);

                }else{
                    console.log("Invaild Currency Code ");
                    
                }
                
             
            

               rl.close(); 
 
              })
        })
        
        // rl.close();
     })
})


