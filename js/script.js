/*window.addEventListener("DOMContentLoaded", function () {
    console.log("content loaded");

let boiData= document.querySelector("#bioData");
let resultsTbody=document.querySelector("#resultsTbody");

boiData.addEventListener("submit", function (event) {
    event.preventDefault();
let centuryInput=document.querySelector("century").value;
let yearInput=document.querySelector("year").value;
let monthInput=document.querySelector("month").value;
let dateInput=document.querySelector("date").value;
console.log("form submitted centuryInput",centuryInput);
console.log("form submitted yearInput",yearInput);
console.log("form submitted monthInput",monthInput);
console.log("form submitted dateInput",dateInput);
var tableRow=document.createElement("tr");
var tableCentury=document.createElement("td");
tableTdCentury.innnerHTML=centuryInput;
var tableTdYear=document.createElement("td")
tableTdYear.innerHTML=yearInput;
var tableTdMonth=document.createElement("td")
tableTdMonth.innerHTML=monthInput;
var tableTdDate=document.createElement("td")
tableTdDate.innerHTML=dateInput;

tableRow.appendChild(tableTdCentury);
tableRow.appendChild(tableTdYear);
tableRow.appendChild(tableTdMonth);
tableRow.appendChild(tableTdDate);
resultsTbody.appendChild("tableRow");
});
;*/
window.addEventListener("DOMContentLoaded", function () {
    console.log("content loaded");

var checkDayOfWeek = century, year, month, date;

function getInput() {
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
}
if (century == "") {
    alert(
        "input the correct gender"
    );
    return false;
}
else if (year == "") {
    alert(
        "input the correct year"
    );
    return false;
}
else if (month == "") {
    alert(
        "input the correct month"
    );
    return false;
}
else if (date == "") {
    alert(
        "input correct date"
    );
    return false;
}
function calculateDay() {
    getInput();
    dayOfWeek = ((((cemtury / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7) - 1;
    console.log(dayOfWeek);
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
        dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > 0) {
        return dayOfWeek;
    }
}

function checkDayOfWeek() {
    day = calculate();
    checkGender();
    console.log("function runs");

}

//arrays
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
/*let femaleName=*/


function checkGender() {
    var gen = document.getElementsByName("rad");
    if (gen[0].checked == true) {
        var gender = "male"
    }
    else if (gen[1].checked == true) {
        var gender = "female"
    }
    else {
        console.log("pass")
    }
    switch (gender) {
        case gender = "male":
            switch (day) {
                case (0 || -0):
                    document.getElementById("result").innerHTML = "the day is on a sunday" + " " + "your Akan name is " + maleNames[0];
                    break;
                case (1 || -1):
                    document.getElementById("result").innerHTML = "the day is on a monday" + " " + "your Akan name is " + maleNames[1];
                    break;
                case (2 || -2):
                    document.getElementById("result").innerHTML = "the day is on a tuesday" + " " + "your Akan name is " + maleNames[2];
                    break;
                case (3 || -3):
                    document.getElementById("result").innerHTML = "the day is on a wednesday" + " " + "your Akan name is " + maleNames[3];
                    break;
                case (4 || -4):
                    document.getElementById("result").innerHTML = "the day is on a thursday" + " " + "your Akan name is " + maleNames[4];
                    break;
                case (5 || -5):
                    document.getElementById("result").innerHTML = "the day is on a friday" + " " + "your Akan name is " + maleNames[5];
                    break;
                case (6 || -6):
                    document.getElementById("result").innerHTML = "the day is on a saturday" + " " + "your Akan name is " + maleNames[6];
                    break;
                default:
            }
            break;
        case gender = "female":
            switch (day) {
                case (0 || -0):
                    document.getElementById("result").innerHTML = "the day is on a sunday" + " " + "your Akan name is " + femaleNames[0];
                    break;
                case (1 || -1):
                    document.getElementById("result").innerHTML = "the day is on a mondays" + " " + "your Akan name is " + femaleNames[1];
                    break;
                case (2 || -2):
                    document.getElementById("result").innerHTML = "the day is on a tuesday" + " " + "your Akan name is " + femaleNames[2];
                    break;
                case (3 || -3):
                    document.getElementById("result").innerHTML = "the day is on a wednesday" + " " + "your Akan name is " + femaleNames[3];
                    break;
                case (4 || -4):
                    document.getElementById("result").innerHTML = "the day is on a thursday" + " " + "your Akan name is " + femaleNames[4];
                    break;
                case (5 || -5):
                    document.getElementById("result").innerHTML = "the day is on a friday" + " " + "your Akan name is " + femaleNames[5];
                    break;
                case (6 || -6):
                    document.getElementById("result").innerHTML = "the day is on a saturday" + " " + "your Akan name is " + femaleNames[6];
                    break;
                    default:
            }
            break;
            case gender="female":
                switch(day){
                    case (0||-0):
                        document.getElementById("result").innerHTML="the day is on a sunday" +"" + "your Akan name is Akosua"
                       break;
                       case (1||-1):
                        document.getElementById("result").innerHTML="the day is on a monday" +"" + "your Akan name is Adwoa"
                       break;
                       case (2||-2):
                        document.getElementById("result").innerHTML="the day is on a tuesday" +"" + "your Akan name is Abenaa"
                       break;
                       case (3||-3):
                        document.getElementById("result").innerHTML="the day is on a wednesday" +"" + "your Akan name is Akua"
                       break;
                       case (4||-4):
                        document.getElementById("result").innerHTML="the day is on a thursday" +"" + "your Akan name is Yaa"
                       break;
                       case (5||-5):
                        document.getElementById("result").innerHTML="the day is on a friday" +"" + "your Akan name is Afua"
                       break;
                       case (6||-6):
                        document.getElementById("result").innerHTML="the day is on a saturday" +"" + "your Akan name is Ama"
                       break;

                    }
                    break
                    default:
                        console.log("pass")

    }

}

