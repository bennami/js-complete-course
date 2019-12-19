

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

   let date = new Date();
   let hour = date.getHours();



if (hour <= 18)
{
    document.getElementById("target").innerHTML = "hello";
}
else{
    document.getElementById("target").innerHTML = "good evening";
}
    // your code here

})();
