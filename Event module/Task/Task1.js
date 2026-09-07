
const EventEmitter  = require("events");

const events= new EventEmitter();

const count = {
    uselogin:0,
    purchase:0,
    update:0,
    logout :0,
}
////make for events 
// 1LOGIN

events.on("login" ,(data ,count)=>{
   console.log(`welcome Back ${data}`);
   count.uselogin++;
   
});

events.on("purchase" ,(name ,item1 , item2,count)=>{
     console.log(`\n ${name} you buy ${item1} and ${item2}`);
     count.purchase++;
});

events.on("profileUpdate" ,(name , email  ,count)=>{
      console.log(`\n ${name}   you chnage your ${email}`);
      count.update++;
});

events.on("logout" ,(data,count)=>{
              console.log(`  \n Succesfullly logout ${data}`);
              count.logout++;
});

events.on("summery", (data)=>{
          
        console.log(`\n Login Event triggeer :   ${count.uselogin}`);
        console.log(`\n Pusharse Event Trigger :  ${count.purchase}`);
        console.log(`\n ProfiklleYdaope evet triiger :  ${count.update} `);
        console.log(`\n Profille Event trigger :  ${count.logout}`);
             
})

/////call all events 


for (let index = 0; index <2; index++) {
    
    events.emit("login","Muhammad Junaid Hassan" ,count);
    
}
events.emit("logout","Muhammad Junaid Hassan",count);
events.emit("purchase","Muhammad Junaid Hassan" ,"Computer ", "laptop",count);
events.emit("profileUpdate","Muhammad Junaid Hassan" ,"Email",count);
events.emit("summery" , count)


