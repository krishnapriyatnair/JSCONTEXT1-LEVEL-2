// You can add your codes here 
function percentage()
{
var name=document.getElementById("name").value;
var classname= document.getElementById("class").value;
var subject1= document.getElementById("mark1").value;
var subject2= document.getElementById("mark2").value;
var subject3= document.getElementById("mark3").value;
    var sum=parseInt(subject1)+parseInt(subject2)+parseInt(subject3);
     var percent=((sum/300)*100);
    //  alert("The percentage obtained by    "+ name + "   of class" + classname +" has scored"+ percent+"%");
    
if(percent<40){

    document.getElementById("p1").style.color= "red" ;
      
}
else if(percent>40 && percent<70)
{
    document.getElementById("p1").style.color="green" ;
 }
else
{
    document.getElementById("p1").style.color="orange" ;

}
document.getElementById("nameof").innerHTML ="The percentage obtained by "+ name ;
document.getElementById("classname").innerHTML =" of class  " +  classname;
document.getElementById("p1").innerHTML ="has scored "+  percent+"%";
return false;
}