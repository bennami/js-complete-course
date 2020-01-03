

(function() {

    let slide = document.getElementById('slider');

    let output = document.getElementById('target');

    output.innerHTML = slide.value;


    slide.oninput = function(){

        output.innerHTML = "0" + slide.value;
    }



    


})();
