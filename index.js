var monthsday = [31,28,31,30,31,30,31,31,30,31,30,31];

const date = new Date();

let days = date.getDate();
let months = date.getMonth() + 1;
let years = date.getFullYear();


let ryear;
let rmonth;
let rday;



var sum_month=0;


function calculate(){
    const year = document.querySelector('#year');
    const month = document.querySelector('#month');
    const day = document.querySelector('#day');
    if(year.value === '' || day.value === '' || month.value === ''){
        alert('one of the INPUTT NOT VALIDE');
        return;
    }/*else if(month.value<months && year.value===years){
        alert("erorr in the month ");
    }else if(year.value<years) {
        alert("erorr in the year");
    }else if(day.value<days && months===month.value){
        alert("problem in the days");
    }
    */
    if(month.value==months){
        ryear=years-year.value;
    }else if(month.value<months){
        ryear=(years-year.value)-1;
    }
    //calculating the months
    let tmp_month = month.value;
    if(ryear ==0){
        rmonth = months - month.value;
    }else{
        rmonth=(months-1)+(years - year.value)*12 + (12-(month.value - 1 ));
    }
    //calculating the days
    rday=recentdays(months);
    console.log("the result year : " + ryear);
    console.log("the result month : " + rmonth);
    console.log("the result days : "+ rday);
    console.log("month : " + month.value);
    console.log("day : " + day.value);
    console.log("years : " + year.value);
    console.log("day : " + days +"months : " + months + "years : " + years);
    document.getElementById('years').innerHTML = ryear;
    document.getElementById('months').innerHTML = rmonth;
    document.getElementById('days').innerHTML = rday;
}
//this function to calculate the passed days from the year
var recent_month;
function recentdays(recent_month){
    let total_days =days;
    for(let i=recent_month-1;i>=1;i--){
        total_days+=monthsday[i];
    }
    let behind_years=0;
    if(ryear === 0){
        return total_days;
    }else{
        behind_years=(ryear - 1)*365;
    }
    let selected_year_days = day.value;
    for(let i=month.value+1;i<=12;i++){
        selected_year_days+=monthsday[i];
    }

    return  total_days+selected_year_days;
}

function calculatemonth(){


}