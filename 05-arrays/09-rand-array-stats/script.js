
(function() {
    document.getElementById('run'). addEventListener("click", function(){



//generate 10 different random n between 1 and 100

        let arr = [];

        for ( x = 1; x <= 100; x++) {
            arr.push(x);
           // arr.push[i];
           // console.log(arr);
            //console.log(Math.floor(Math.random()*100
        }
console.log((arr));


//shuffle numbers
        function Shuffle(arr){
          let currentIndex = arr.length, tempValue, randomIndex;

          while ( 0 !== currentIndex){

              randomIndex = Math.floor(Math.random()*currentIndex);
              currentIndex -= 1;


              //swap with current element
              tempValue = arr[currentIndex];
              arr[currentIndex]=arr[randomIndex];
              arr[randomIndex]=tempValue;

            }
return arr;
        }
        console.log(arr);

    });
})();
