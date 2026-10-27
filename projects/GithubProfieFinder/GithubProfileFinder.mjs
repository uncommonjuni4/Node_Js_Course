import https from "https"

import readline from "readline";


const rl = readline.createInterface({

    input: process.stdin,
    output : process.stdout
})


const options = {
  headers: {
    "User-Agent": "Juni-GitHub-Finder"
  }
};
let url ;

rl.question("Enter GitHub Username:", (username)=>{

             if(username){
                 url = `https://api.github.com/users/${username}`;

                 
https.get(url,options, (response)=>{

      let data = "";
    response.on("data", (chuck)=>{
         data+=chuck;
    })


    response.on("end", ()=>{

        let formatData = JSON.parse(data);
        console.log("User find");
        
        console.log(data);
        console.log(`Name : ${formatData.name}`);
        
        console.log(`Username: ${formatData.login}`);
        
        console.log(`Public Repositories: ${formatData.url} \n
      Followers: ${formatData.followers}
      Following: ${formatData.following}
      Profile:  ${formatData.html_url}`);


      rl.close();
        
        
        
    })

})
             }else{
                console.log("Invail user Name");
                
             }

        })





