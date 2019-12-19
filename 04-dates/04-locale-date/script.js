
(function() {

   let date = new Date(); //stores current date and time in variable

    let dayname = date.getDay(); //change this value into name of days
    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth(); //+ 1; //change this value into name of months

    let hour = date.getHours();
    let minutes = date.getMinutes();
        let time = hour +":"+ minutes;


    function getMonthName(month){
        let monthNames = ['January', 'February', 'March', 'April', 'May',' June', 'July', 'August','September', 'October', 'November', 'December'];
        return monthNames [month];
}

    function getDayName(dayname){

        let dayNames= [' ', 'Monday', 'Tuesday', 'wednesday', 'thursday', 'friday','Saturday', 'Sunday'];
        return dayNames [dayname];
}

document.getElementById("target").innerHTML =  getDayName(dayname)+ " " + day+ " " + getMonthName(month)+ " " +  year +", "+time;
//change commas to + to make it into  string
})();
