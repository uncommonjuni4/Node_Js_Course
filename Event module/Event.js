///import  event module first
const Event = require("events");

///make an  new arry instance for all propteries of Event ,module

const event= new  Event()


const data ={
    name :"Junaud HAssan",
    location :"Sahiwal",
}
////firasst maek event with on ya add

event.on("greet" , (data)=>{
        console.log(`Welconme back  ${data.name }  , location ${data.location}`);
        
});



event.emit("greet",data);
