
//first line is for the button with "run id. it listens to a click, then runs function
document.getElementById("run").addEventListener("click", function() {

// to get the value of an input: document.getElementById("element-id").value
// put value into variable arr
let arr = document.getElementById("numbers").value;
//the value I get is a string


// split tot transform into arrays, we remove comma and space from string to keep only numbers
let result = arr.split(", ");


result.sort(function(a,b){return a-b});


// after resturning sor, i asign res to "numbers"
document.getElementById("numbers").value = result;

});


