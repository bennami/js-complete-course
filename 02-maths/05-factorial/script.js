

    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        let input = document.getElementById('number').value;

        let number = parseInt(input);

            console.log(number);
            function factorial(number){
            if (number > 0 && number <= 1){

                return 1;
            }

            else {

                return number * factorial(number-1);
            }

          }

        document.getElementById('number').value; = number ;

    });


