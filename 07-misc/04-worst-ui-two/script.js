

(function() {

    let first = document.getElementById('part-one').innerHTML;
    let second = document.getElementById('part-two').innerHTML;
    let third = document.getElementById('part-three').innerHTML;
    let four = document.getElementById('part-four').innerHTML;
console.log(second);
    let output = document.getElementById('target');

    let total = 0 + first + second + third+ four ;
    output.innerHTML = total;

    console.log(first,second,third,four);

    console.log(total);



    document.getElementById('part-one').addEventListener("click", function(){


        first = 0;
        console.log(first)
        if(first.value < 460){
            first++;
        }

    });

    document.getElementById('part-two').addEventListener("click", function(){


        second.value;
        console.log(second)

    });

    document.getElementById('part-three').addEventListener("click", function(){


        third.value;
        console.log(third)

    });

    document.getElementById('part-four').addEventListener("click", function(){


        four.value;
        console.log(four)

    });







})();
