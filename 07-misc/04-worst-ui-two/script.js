

(function() {

    //get html button
    let first = document.getElementById('part-one');
    let second = document.getElementById('part-two');
    let third = document.getElementById('part-three');
    let four = document.getElementById('part-four');

    console.log(second);
    //get output tag
    let output = document.getElementById('target');

    //concat result in a var
    let total =  '0' + first.innerHTML + second.innerHTML + third.innerHTML + four.innerHTML ;


    // Create event listener for each button
    document.getElementById('part-one').addEventListener('click',function () {


     if(first.innerHTML< 499){
         first.innerHTML++;
     }else{
         first.innerHTML= "460";
     }
     //increment value, place it back to output and return value
     output.innerHTML = '0' + first.innerHTML + second.innerHTML + third.innerHTML + four.innerHTML;
     return total;

    });

    document.getElementById('part-two').addEventListener("click", function(){


        if(second.innerHTML < 99){
            second.innerHTML++;
        }else{
            second.innerHTML= "0";
        }
        //increment value, put zero for value 0-9, place it back to output and return value
        if(second.innerHTML<10){
            second.innerHTML =  "0" + second.innerHTML;
        }
        output.innerHTML = '0' + first.innerHTML + second.innerHTML + third.innerHTML + four.innerHTML ;
        return total;

    });

    document.getElementById('part-three').addEventListener("click", function(){



       if(third.innerHTML < 99){
           third.innerHTML++;
       }else{
           third.innerHTML= "0";
       }
        //increment value, put zero for value 0-9, place it back to output and return value
        if(third.innerHTML <10){
          third.innerHTML =  "0" + third.innerHTML;
        }
        output.innerHTML = '0' + first.innerHTML + second.innerHTML + third.innerHTML + four.innerHTML ;
        return total;

    });

    document.getElementById('part-four').addEventListener("click", function(){


        if(four.innerHTML < 99){
        four.innerHTML++;
        }else{
            four.innerHTML= "0";
        }
        //increment value, put zero for value 0-9, place it back to output and return value
        if(four.innerHTML <10){
            four.innerHTML =  "0" +  four.innerHTML;
        }
        output.innerHTML = '0' + first.innerHTML + second.innerHTML + third.innerHTML + four.innerHTML ;
        return total;
    });


/*
//solving it with a switch case?

    //get html button
    let first = document.getElementById('part-one');
    let second = document.getElementById('part-two');
    let third = document.getElementById('part-three');
    let four = document.getElementById('part-four');


    //get output tag
    let output = document.getElementById('target');

    //concat result in a var
    let total =  '0' + first.innerHTML + second.innerHTML + third.innerHTML + four.innerHTML ;

    //assign total to output tag
    output.innerHTML = total;


    function calc(imane){
    switch(imane){

        case 'part-one':
            document.getElementById('part-one').addEventListener("click", function(){

                first.innerHTML++;
            });

        case 'part-two':
            second.innerHTML++;

        case 'part-three':
            third.innerHTML++;

        case 'part-four':
            four.innerHTML++;

    }

}
calc();


*/

/*


// for each


        let buttons = document.querySelectorAll("button");

        document.getElementById("target").innerHTML = 460000000;

        buttons.forEach(function (button) {

            button.addEventListener("click", function () {
                let newNumber= 460;

                if (button.id === "part-four"){
                    newNumber = + document.getElementById("target").innerHTML;
                    document.getElementById("target").innerHTML = newNumber + 1;
                }
                if (button.id === "part-three"){
                    newNumber = +document.getElementById("target").innerHTML;
                    document.getElementById("target").innerHTML = newNumber + 100;
                }
                if (button.id === "part-two"){
                    newNumber = +document.getElementById("target").innerHTML;
                    document.getElementById("target").innerHTML = newNumber + 10000;
                }
                if (button.id === "part-one"){
                    newNumber = +document.getElementById("target").innerHTML;
                    document.getElementById("target").innerHTML = newNumber + 1000000;
                }
            });
        })

*/


})();
