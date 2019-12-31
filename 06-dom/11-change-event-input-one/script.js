
(function() {


    document.getElementById("pass-one").onkeyup = function() {
//get input value
        let password = document.getElementById("pass-one").value;
//count length
        let n = password.length ;
//assign n value to counter
           document.getElementById('counter').innerHTML = n + "/10";
//add max length attr to html
        document.getElementById("pass-one").maxLength= 10;

//turn border red if n >=10
        if(n >= 10){
            document.getElementById("pass-one").style.borderColor='red';
        }


    }





})();
