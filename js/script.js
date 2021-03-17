/*//business logic
/*guidelines
CC - is the century digits. For example 1989 has CC = 19
 YY - is the Year digits (1989 has YY = 89)
 var year=year.toFixed(2);

var Century = year.substring(0, 2)
/*var modulus= "%"
var date= (input.date)
var month= (input.month)
var mNames = ["Sunday", "Kwasi", "Monday", "Kwadwo", "Tuesday", "Kwabena", "Wednesday", "Kwaku", "Thursday", "Yaw", "Friday", "Kofi", "Saturday", "Kwame"]
var fNames = ["Sunday", "Akosua", "Monday", "Adwoa", "Tuesday", "Abenaa", "Wednesday", "Akua", "Thursday", "Yaa", "Friday", "Afua", "Saturday", "Ama"]
var fName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var mName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
//user interface
function submit() {
  var year = document.myForm.year.value;
  var month = document.myForm.month.value;
  var date = document.myForm.date.value;
  var gender = document.myForm.gender.value;
  var YY= year.substring(2,4)
  var CC=YY.substring(0,2)
  //var CC=century
  //get correct input
  /*The application should check whether the date and month entered is valid. if either of them is invalid,  the user should be alerted and asked to enter a valid one. For example:
      An invalid day should be (d<=0) or (d>31)An invalid month should be (m<= 0) or (m > 12)
  if (document.myForm.date.value<=0 || document.myForm.date.value>31) { alert("Input correct date!")}
  else{return true}
  if (document.myForm.month.value<=0 ||document.myForm.month.value>12 ) { alert("Input the correct month of birth!")}
  else{return true}
  if (document.myForm.year.length()>4) {alert("Please write your correct year of Birth!") }
  else{return true}
  if (document.myForm.gender.value!="male"||document.myForm.gender.value!="female"){alert("choose correct gender")}
  //calculation
 // calcBirthDay => { Math.floor((((year.substring(0, 2) / 4) - 2 * year.substring(0, 2) - 1) + ((5 * year.substring(2, 4) / 4)) + ((26 * (month + 1) / 10)) + date) % 7) }
  var dayOfTheWeek;
  dayOfTheWeek=Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + date ) % 7) 


  //assigning values
  if (gender=="female"&& dayOfTheWeek==1){alert("your akan name is " +fName[0])}
else if (gender=="female"&& dayOfTheWeek==2){alert("your akan name is " +fName[1])}
else if (gender=="female"&& dayOfTheWeek==3){alert("your akan name is " +fName[2])}
else if (gender=="female"&& dayOfTheWeek==4){alert("your akan name is " +fName[3])}
else if (gender=="female"&& dayOfTheWeek==5){alert("your akan name is " +fName[4])}
else if (gender=="female"&& dayOfTheWeek==6){alert("your akan name is " +fName[5])}
else if (gender=="female"&& dayOfTheWeek==7){alert("your akan name is " +fName[6])}
//male names

if (gender=="male"&& dayOfTheWeek==1){alert("your akan name is " +mName[0])}
else if (gender=="male"&& dayOfTheWeek==2){alert("your akan name is " +mName[1])}
else if (gender=="male"&& dayOfTheWeek==3){alert("your akan name is " +mName[2])}
else if (gender=="male"&& dayOfTheWeek==4){alert("your akan name is " +mName[3])}
else if (gender=="male"&& dayOfTheWeek==5){alert("your akan name is " +mName[4])}
else if (gender=="male"&& dayOfTheWeek==6){alert("your akan name is " +mName[5])}
else if (gender=="male"&& dayOfTheWeek==7){alert("your akan name is " +mName[6])}

};
*/
function calculate ()
{
    var year = document.form1.year.value;
    var month = document.form1.month.value;
    var date = document.form1.date.value;
    var gender=document.form1.gender.value;

    var dayOfTheWeek;
    dayOfTheWeek=Math.floor(( ( (year[1,2]/4) -2*year[1,2]-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date )%7)

    var fName=["Akosua","Adwoa","Abenaa","Akua", "Yaa","Afua","Ama"]
    var mName=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    //female names
if (gender=="female"&& dayOfTheWeek==1){alert("your akan name is " +fName[0])}
else if (gender=="female"&& dayOfTheWeek==2){alert("your akan name is " +fName[1])}
else if (gender=="female"&& dayOfTheWeek==3){alert("your akan name is " +fName[2])}
else if (gender=="female"&& dayOfTheWeek==4){alert("your akan name is " +fName[3])}
else if (gender=="female"&& dayOfTheWeek==5){alert("your akan name is " +fName[4])}
else if (gender=="female"&& dayOfTheWeek==6){alert("your akan name is " +fName[5])}
else if (gender=="female"&& dayOfTheWeek==7){alert("your akan name is " +fName[6])}

//male names

if (gender=="male"&& dayOfTheWeek==1){alert("your akan name is " +mName[0])}
else if (gender=="male"&& dayOfTheWeek==2){alert("your akan name is " +mName[1])}
else if (gender=="male"&& dayOfTheWeek==3){alert("your akan name is " +mName[2])}
else if (gender=="male"&& dayOfTheWeek==4){alert("your akan name is " +mName[3])}
else if (gender=="male"&& dayOfTheWeek==5){alert("your akan name is " +mName[4])}
else if (gender=="male"&& dayOfTheWeek==6){alert("your akan name is " +mName[5])}
else if (gender=="male"&& dayOfTheWeek==7){alert("your akan name is " +mName[6])}




};
