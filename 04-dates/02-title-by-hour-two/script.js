
(function() {

let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();

console.log (date);
console.log (hour);


if ( hour >= 17 && minutes >= 30){
    document.getElementById("target").innerHTML = "good evening"
}

else if(hour >= 18 )
{
    document.getElementById("target").innerHTML = "good evening"
}
else {
    document.getElementById("target").innerHTML = "hello"
}



})();
