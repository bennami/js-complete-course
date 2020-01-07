

(function() {
    //define before click function so it gets the value on page load and refresh
    document.getElementById('target').innerHTML = localStorage.getItem('number');

    //eventlistener for button to execute increment
    document.getElementById("increment").onclick = function() {increment()};

    let count = localStorage.getItem('number');
    function increment(){

        //save value in localstorage
        localStorage.setItem('number', count++);

        //assign increment to target
        document.getElementById('target').innerHTML = localStorage.getItem('number');

    }
    })();
