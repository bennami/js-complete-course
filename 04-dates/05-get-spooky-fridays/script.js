
(function() {
    document.getElementById("run").addEventListener("click", function() {
        let yearInput = document.getElementById('year').value;
       // console.log(yearInput);
        let date = new Date(yearInput, );
       // console.log(date);

function luckyFriday(yearInput){


        for ( month=0; month<12; month ++){
let result = " "
            var d = new Date(yearInput, month,13 );

            if (d.getDay() === 5){

                monthArr =['January ', 'February ', 'March ', 'April ', 'May ',' June ', 'July ', 'August ','September ', 'October ', 'November ', 'December '] ;

           alert(monthArr[month]);

            }

        }


}

luckyFriday(yearInput);




//get year, get dates

    });
    // your code here

})();
