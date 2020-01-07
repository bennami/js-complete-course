

(function() {



    document.getElementById("increment").onclick = function() {getvalue()};

    let count = 1;
    function getvalue(){

        //save value in localstorage
        localStorage.setItem('number', count++);

        //assign it to p tag
        document.getElementById('target').innerHTML = localStorage.getItem('number');

    }
    })();
