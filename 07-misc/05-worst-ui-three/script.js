
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




    document.getElementById('fix-part-one').addEventListener("click", function(){

        calc1= (Math.floor(Math.random()*((one.getAttribute('data-max')-one.getAttribute('data-min'))+1)+460));
        document.getElementById('part-one').value = calc1;
        calc1 = '0'+ calc1;
        result.innerHTML = calc1 + calc2 + calc3 + calc4;
        return calc1;


    });

    document.getElementById('fix-part-two').addEventListener("click", function(){

         calc2= (Math.floor(Math.random()*99)+1);
        if(calc2< 10){
            calc2 = "0"+calc2;
        }
        document.getElementById('part-two').value = calc2;
        result.innerHTML = calc1 + calc2 + calc3 + calc4;
        return calc2;
    });

    document.getElementById('fix-part-three').addEventListener("click", function(){

        calc3= (Math.floor(Math.random()*99)+1);
        if(calc3< 10){
            calc3 = "0"+calc3;
        }
        document.getElementById('part-three').value = calc3;
        result.innerHTML = calc1 + calc2 + calc3 + calc4;
        return calc3;
    });

    document.getElementById('fix-part-four').addEventListener("click", function(){

        calc4= (Math.floor(Math.random()*99)+1);
        if(calc4< 10){
            calc4 = "0"+calc4;
        }
        document.getElementById('part-four').value = calc4;
        result.innerHTML = calc1 + calc2 + calc3 + calc4;
        return calc4;
    });
})();
