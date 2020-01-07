

(function() {

        document.getElementById("increment").onclick = function() {increment()};
    //get target p
    let number = document.getElementById('target').innerHTML;

    //execute this function onclick
    function increment() {

        //increase value of number
        let count = number++;

        //save value in localstorage
        localStorage.setItem('number', count);

        //get saved value
        localStorage.getItem('number');

        //assign it to p tag
        document.getElementById('target').innerHTML = localStorage.getItem('number');

    }
    })();
