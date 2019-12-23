

(function() {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];


document.getElementById('run').addEventListener('click', function () {
document.getElementById('run');

    console.log(fruits.length); // gets lenght of array
    console.log(fruits);
    fruits.pop(); //removes last string
    fruits.shift();//removes first string
    console.log(fruits);
    alert(fruits);
    fruits.push ('kiwi'); //adds string element to end
    fruits.unshift('banana'); // adds string element to start
    console.log(fruits);

    alert(fruits);


});




})();
