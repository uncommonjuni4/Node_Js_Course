import https from "https";

import readline from "readline";



const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,

})


const apikey = "37eef2128b0348cab2054808252509";
let SearchCity ;

rl.question("Enter which counrty weather You want to see :", (cityName)=>{


    SearchCity =cityName;
const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityName}`;
    
https.get(url, (respone)=>{

    let dta ="";

    respone.on("data", (chunk)=>{
           dta  = dta +chunk; 
    })

    respone.on("end" , ()=>{
        let formatData = JSON.parse(dta);
        console.log(formatData);

        console.log("Country Name : ", formatData.location.country);
        console.log("City Name : ", formatData.location.name);
        console.log(`Latest Update of ${formatData.current.last_updated}`);
        console.log(`Cloudy : ${formatData.current.cloud}`);
        console.log(`Chnace Of Snow : ${formatData.current.chance_of_snow}`);
        
        
        
        rl.close();
    })
     
})
})


