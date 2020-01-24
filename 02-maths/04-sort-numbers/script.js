//first line is for the button with "run id. it listens to a click, then runs function
document.getElementById("run").addEventListener("click", function() {

// to get the value of an input: document.getElementById("element-id").value
// put value into variable
let numbers = document.getElementById("numbers").value;

// split tot transform into arrays, we remove comma and space from string to keep only numbers, now we have an array of numbers that we can sort
let result = numbers.split(", ");

result.sort(function(a,b){return a-b});

// after returning sorted array, i asign result to DOM
document.getElementById("numbers").value = result;

});


