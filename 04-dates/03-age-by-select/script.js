

(function () {
    document.getElementById("run").addEventListener("click", function() {
        //declare before function
        //input from user
        let dayinput = document.getElementById("dob-day").value;
        let monthinput = document.getElementById("dob-month").value;
        let yearinput = document.getElementById("dob-year").value;

        function birthday(day,month,year){

//current date
        let currentDate = new Date();
        let CurrentDay = currentDate.getDate() ;
        console.log(CurrentDay);
        let CurrentMonth = currentDate.getMonth() + 1; // +1 cuz month start at 0 in js
        console.log(CurrentMonth);
        let CurrentYear = currentDate.getFullYear();

//calculate

        let bday =  CurrentDay - day ;
        let bmonth = CurrentMonth  - month;
        let byear =   CurrentYear - year;

        console.log ( bday, bmonth, byear);

        if ( bday < 0){

            byear--;
        }

        return byear;
     }

 console.log(birthday(dayinput, monthinput, yearinput));
//gives negative numbers

alert (birthday(dayinput,monthinput,yearinput));



    });






})();
