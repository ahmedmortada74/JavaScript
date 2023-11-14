// var x;
// var y;

// function leesthan100(x,y)
// {
// return(x+y)<100?  true : false;
// }
// console.log(70,95);

//********************************
           //دالة string  لتصحيح حويل الي  عدد 
               //parseInt لتحويل  (zالي رقم 
              //استدعاء  الدله  وبعد تحويل الي عدد
// function stringint(z)     
// {
//     return parseInt(z)
// }
// console.log(stringint("30"));

//***********************/
// var r=5;
// for (var i=1; i<=r ; i++)
// {
//     for(var j=1; j<=i; j++)
//     {
//          document.write("*");
//     } 
//      document.write("<br>");
// }

// stars++"*";
// console.log("Stars");
//******************** */

//******************************************8 


// function validateName(name)
// {
//     return typeof name==='string'&& name.trim() !=='';
// } 
// function validateBirthYear(BirthYear)
// {
//     return !isNaN(BirthYear)&& Number.isInteger(BirthYear)&&BirthYear<2010;
// }
// function calculateAge(BirthYear)
// {
//     var currentYear=new Date().getFullYear;
//     return currentYear-BirthYear;
// }
// function promptName()
// {
//     var name = promptName("Enter your name:");
//     if(validateName(name))
//     {
//         return name;
//     } 
// else
// {
//     return promptName();
// }
//  function promptBirthYear()
//  {
//     var BirthYear= parseInt(prompt("Enter your Birth year:"))
//  }
//  var name=promptName();
//  var BirthYear =promptBirthYear();
//  var age =calculateAge(BirthYear);
//  var  output =  "name:" +name+ "\n birth year:"+BirthYear+"\n age:"+age;
//    document.write(output);
// }

//*********************** */
var Name=prompt("entrer Name:")
while  (isFinite(Name)==true) 
{
    Name=prompt("entere Name ")
}
var birthYear=prompt("Enter birth Year:")
while (isFinite(birthYear)==false && birthYear>2010)
{
    birthYear=prompt("Enter birth Year:")
}
 var Age =2023 -birthYear
 document.write(Name +"<br>" +birthYear+"<br>"+Age)
