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











