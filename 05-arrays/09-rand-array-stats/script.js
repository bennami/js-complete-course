
(function() {
    document.getElementById('run'). addEventListener("click", function(){



//generate 10 different random n between 1 and 100

        let arr = [];

        for ( x = 0; x < 10; x++) {

            arr[x] = Math.floor(Math.random()*100); //randomize

            document.getElementById('n-'+(x+1)).innerHTML = arr[x]; //assign number to tablepop


        }

      let min;
        min = Math.min.apply(null, arr); //why .apply and null??????
        document.getElementById('min').innerHTML = min ;


       let max;
        max = Math.max.apply(null, arr);
        document.getElementById('max').innerHTML = max;

        let sum; //accumulator takes first value of array if not defined
        sum = arr.reduce((acc,arr) => acc +arr);
        document.getElementById('sum').innerText = sum;

        //another way to reduce with writing function full out
        function answer (acc, arr){
            return acc + arr;
        }
        let redu = arr.reduce(answer);
        console.log(redu);

        //with no reduce
        let total = 0;
        for(let i =0; i < arr.length; i++){

            total += arr[i];
        }
         console.log(total);

        //average

        let avg = (sum /arr.length);
        console.log(avg);
        document.getElementById('average').innerHTML = avg ;








    });
})();
