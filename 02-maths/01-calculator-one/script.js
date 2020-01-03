
(function calc() {
    // to get the value of an input: document.getElementById("element-id").value
    let number1 = document.getElementById ("op-one" ).value;
    let number2 = document.getElementById ("op-two" ).value ;

document.getElementById("addition").addEventListener("click", function() {

   let sum = parseInt(number1) + parseInt(number2);
    alert (sum);

    });

document.getElementById("substraction").addEventListener("click", function() {

       let sum = parseInt(number1) - parseInt(number2);
        alert (sum);
    });

document.getElementById("multiplication").addEventListener("click", function() {


      let  sum = parseInt(number1) * parseInt(number2);
        alert (sum);
    });

document.getElementById("division").addEventListener("click", function() {

      let sum = parseInt(number1) / parseInt(number2);
        alert (sum);

    });
})();
