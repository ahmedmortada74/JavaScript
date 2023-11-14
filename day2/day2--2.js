var Date =prompt("Enter date")
if
( Date[2]=="_"&& Date[5]=="_"&& Date.length==10)
{

  var Day =Date.substring(0,2)
  var DayNum=parseInt(Day)
  
  var Month= Date.substring(3,2)
  var MonthNum=parseInt(Month)
  
  var Year=Date.substring(6,4)
  var YearNum=parseInt(Year)
}

 else
 {
  alert("wong")
 }
