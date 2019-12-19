
(function() {



   let date = new Date(); //stores current date and time in variable

    let dayname = date.getDay();
    let day =date.getDate();


    let year = date.getFullYear();
    let month = date.getMonth() + 1;

    let hour = date.getHours();
    let minutes = date.getMinutes();
        let time = hour +":"+ minutes;

    ArrDays = [ 'Monday', 'Tuesday', 'wednesday', 'thursday', 'friday'];

    ArrMonths = ['January', 'February', 'March', 'April', 'May',' June', 'July', 'August','September', 'October', 'November', 'December'];


    console.log(dayname, day ,month, year,  time);


    document.getElementById("target").innerHTML = date;

  //  date.toLocaleDateString()
})();
