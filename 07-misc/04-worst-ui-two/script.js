

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


})();
