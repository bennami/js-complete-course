
(function() {

   let one = document.getElementById('part-one');
   let two = document.getElementById('part-two');
   let three = document.getElementById('part-three');
   let four = document.getElementById('part-four');
   let result =  document.getElementById('target');

    let calc1 = '00';
    let calc2 = '00';
    let calc3 = '00';
    let calc4 = '00';


    function lemath() {
        calc1= (Math.floor(Math.random()*((one.getAttribute('data-max')-(one.getAttribute('data-min'))))+460));
        document.getElementById('part-one').value =  calc1;
    }

    let beginout = setInterval(lemath, 100);



    function lemath2() {

        calc2= (Math.floor(Math.random()*((two.getAttribute('data-max'))-(two.getAttribute('data-min')))));
        document.getElementById('part-two').value = calc2;


    }

    let beginout2 = setInterval(lemath2, 100);



    function lemath3() {

        calc3= (Math.floor(Math.random()*((four.getAttribute('data-max'))-(three.getAttribute('data-min')))));
        document.getElementById('part-three').value = calc3;

    }

    let beginout3 = setInterval(lemath3, 100);



    function lemath4() {
        calc4= (Math.floor(Math.random()*((four.getAttribute('data-max'))-(four.getAttribute('data-min')))));
        document.getElementById('part-four').value = calc4;

    }

    let beginout4 = setInterval(lemath4, 100);





    document.getElementById('fix-part-one').addEventListener("click", function (){

       clearInterval(beginout);

       result.innerHTML ='0'+ calc1 + calc2 + calc3 + calc4;
       return calc1;



    });

    document.getElementById('fix-part-two').addEventListener("click", function run2(){

        clearInterval(beginout2);

        if(calc2 < 10){
            calc2 = "0"+calc2;

        }



        result.innerHTML ='0'+ calc1 + calc2 + calc3 + calc4;
        return calc2;
    });

    document.getElementById('fix-part-three').addEventListener("click", function run3(){

        clearInterval(beginout3);

        if(calc3< 10){
            calc3 = "0"+calc3;

        }
        document.getElementById('part-three').value = calc3;
        result.innerHTML = '0'+calc1 + calc2 + calc3 + calc4;
        return calc3;
    });

    document.getElementById('fix-part-four').addEventListener("click", function run4(){

        clearInterval(beginout4);
        if(calc4< 10){
            calc4 = "0"+calc4;
        }
        document.getElementById('part-four').value = calc4;
        result.innerHTML = '0'+calc1 + calc2 + calc3 + calc4;
        return calc4;


    });



/*
   document.addEventListener('DOMContentLoaded', function () {
        begin();

    });

 */


})();

/*

 document.getElementById('fix-part-one').addEventListener("click", function(){

        calc1= (Math.floor(Math.random()*((one.getAttribute('data-max')-one.getAttribute('data-min'))+1)+460));
        document.getElementById('part-one').value = calc1;
        calc1 = '0'+ calc1;
        result.innerHTML = calc1 + calc2 + calc3 + calc4;
        return calc1;


    });


// slot counter
var count = 0;

function lemath()
{
    count++;
    var stuff = document.getElementById('stuff');
    stuff.innerHTML = "stuff: " + count;
}

function begin()
{
    lemath();
    setTimeout(begin, 100, window);
}

document.addEventListener('DOMContentLoaded', function () {
    begin();




});
 */

