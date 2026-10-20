export default function studentinfo(name){

    return(`Student : ${name}`);
}



export function calculateGrade(marks){
    if(marks >=80){
        return "A";
    }else if(marks >=60 && marks <=79){
        return "B";
    }else if (marks >=0 && marks <=59){
        return "C";
    }
}