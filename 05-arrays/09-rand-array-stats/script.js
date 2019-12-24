
(function() {
    document.getElementById('run'). addEventListener("click", function(){



//generate 10 different random n between 1 and 100

        let arr = [];

        for ( x = 0; x < 10; x++) {

            arr[x] = Math.floor(Math.random()*100); //randomize

            document.getElementById('n-'+(x+1)).innerHTML = arr[x]; //assign number to tablepop


        }

      let min = Math.min.apply(null, arr); //why .apply and null??????

        document.getElementById('min').innerHTML = min ;


       let max = Math.max.apply(null, arr);
        document.getElementById('max').innerHTML = max;

        let sum = arr.reduce((acc,arr) => acc +arr);
        console.log(sum)
        document.getElementById('sum').innerText = sum;




    });
})();
