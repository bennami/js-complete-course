
(function () {
//get id and listen to a click
    document.getElementById('run').addEventListener("click", function () {

    let input;

    input = document.getElementById('color').value;

//use input as bg color
    document.body.style.backgroundColor = input;

    console.log (input);
    });

})();
