

(function() {

    document.getElementById('run').addEventListener("click", function () {

        //generate random color

let r, g, b;

        //change bg color
r = Math.floor(Math.random() * 256);
g = Math.floor(Math.random() * 256);
b = Math.floor(Math.random() * 256);

let color;

color = "rgb(" + r + ","+ g + "," + b + ")";

document.body.style.backgroundColor =  color;
console.log(color);

    });



})();
