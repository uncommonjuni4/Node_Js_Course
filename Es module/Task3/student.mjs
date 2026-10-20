export default function welcomeStudent(name){

    return (`Welcome ${name}!`);
    
}



export function getGrade(marks){
    if(marks >80){
        return ("A");
        
    }else{
        
        return ("B");
    }
}