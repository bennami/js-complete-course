
(function() {

    document.getElementById("run").addEventListener("click", function() {
//a sqaure of a number is the number to the power of 2
      let square;

      for (n =1; n < 22; n ++){
      square = Math.pow( n,2);
      alert (square + " ");
      }

    });

})();

