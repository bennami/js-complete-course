

(function () {
    document.getElementById("run").addEventListener("click", function() {

        let day = document.getElementById("dob-day").value;
        console.log(day);

        let month = document.getElementById("dob-month").value;
        console.log(month);

        let year = document.getElementById("dob-year").value;
        console.log (year);

        let bday = day + " " + month + " " + year ;
        console.log(bday) ;


        let currentDate = new Date();
        CurrentDay = currentDate.getDay();
        CurrentMonth = currentDate.getMonth();
        CurrentYear = currentDate.getFullYear();
        console.log(CurrentYear);



    });






})();
