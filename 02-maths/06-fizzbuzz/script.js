// // there are better ways to fix this.
(function fizzbuzz() {
    for ( let i = 1; i <= 100; i ++){

        if ( (i % 3 === 0) && (i % 5 === 0) ) {
            console.log(i + " Fizzbuzz");
        } else if (i % 3 === 0){
            console.log ( i + " fizz");
        } else if ( i % 5 === 0 ){
            console.log( i + " buzz");
        } else {
            console.log (i);
        }
    }
})();
