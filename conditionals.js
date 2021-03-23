function getGrade(marks){

    if(marks>=80){
        return "A"
    }
    else if(marks<=79,marks>=70){
        return "B"
    }
    else if(marks<=69,marks>=60){
        return "C"
    }
    else if(marks<=59,marks>=50){
        return "D"
    }
    else if(marks<=49,marks>=40){
        return "E"
    }
    else{
        return "F"
    }

}
var result=getGrade(50)
console.log(result);