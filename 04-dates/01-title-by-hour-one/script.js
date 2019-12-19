

(function() {

//built in methods that help you get a date and an hour inside the date

// get hour
   let date = new Date();
   let hour = date.getHours();



if (hour <= 18)
{
    document.getElementById("target").innerHTML = "hello";
}
else{
    document.getElementById("target").innerHTML = "good evening";
}


})();
