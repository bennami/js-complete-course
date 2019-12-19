

(function () {
    document.getElementById("run").addEventListener("click", function() {
 //input from user
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;


//current date
        let currentDate = new Date();
        let CurrentDay = currentDate.getDay(); //
        let CurrentMonth = currentDate.getMonth() + 1; // +1 cuz month start at 0 in js
        console.log(CurrentMonth);
        let CurrentYear = currentDate.getFullYear();

//calculate

      let   bday =  CurrentDay - day ;
      let bmonth = CurrentMonth  - month;
      let byear =   CurrentYear - year;

      console.log (bday , bmonth, byear);





    });






})();
