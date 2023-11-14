
    // var fullNameRegex = /^[a-zA-Z]{4,}( [a-zA-Z]{4,})*$/;
    // var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|edu|org)\.eg$/;
  
    // var fullName = prompt("Please enter your full name:");
    // while (!fullNameRegex.test(fullName)) {
    //   fullName = prompt("Invalid full name format. Please enter your full name:");
    // }
  
    // var email = prompt("Please enter your email address:");
    // while (!emailRegex.test(email)) {
    //   email = prompt("Invalid email format. Please enter your email address:");
    // }
  
    // alert("Full Name: " + fullName + "\nEmail: " + email);

  ////=====================================================
  try{
  var fullNameRegex = /^[a-zA-Z]{4,}( [a-zA-Z]{4,})*$/;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|edu|org)\.eg$/;

  var fullName = prompt("Please enter your full name:");
  while (!fullNameRegex.test(fullName)) {
    throw Error ("Invalid full name format. Please enter your full name:");
  }
  alert("Full Name: " + fullName + "\nEmail: " + email);
}
catch (Error)
{
    alert("Error : " + Error );
} finally {
  alert("correct.");
 }
//   




  
 