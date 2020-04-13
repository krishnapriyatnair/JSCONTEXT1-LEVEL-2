// You can add your codes here 
function percentage()
{
let name=document.getElementById("name").value;
let classname= document.getElementById("class").value;
let subject1= document.getElementById("mark1").value;
let subject2= document.getElementById("mark2").value;
let subject3= document.getElementById("mark3").value;
    var sum=parseInt(subject1)+parseInt(subject2)+parseInt(subject3);
     var percent=((sum/300)*100);
     alert("The percentage obtained by    "+ name + "   of class" + classname +" has scored"+ percent+"%");
    return(percent);
}

