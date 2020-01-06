
(function() {

   let one = document.getElementById('part-one');
   let two = document.getElementById('part-two');
   let three = document.getElementById('part-three');
   let four = document.getElementById('part-four');



    document.getElementById('fix-part-one').addEventListener("click", function(){
let calc1= (Math.floor(Math.random()*((one.getAttribute('data-max')-one.getAttribute('data-min'))+1)+460));
console.log(calc1);

document.getElementById('part-one').value = calc1;
return calc1;


    });

    document.getElementById('fix-part-two').addEventListener("click", function(){
        let calc2= (Math.floor(Math.random()*((one.getAttribute('data-max')-one.getAttribute('data-min')))+99));
        console.log(calc2);
    });

    document.getElementById('fix-part-three').addEventListener("click", function(){
        let calc3= (Math.floor(Math.random()*((one.getAttribute('data-max')-one.getAttribute('data-min')))+99));

        console.log(calc3);
    });

    document.getElementById('fix-part-four').addEventListener("click", function(){
        let calc4= (Math.floor(Math.random()*((one.getAttribute('data-max')-one.getAttribute('data-min')))+99));
        console.log(calc4);
    });
})();
