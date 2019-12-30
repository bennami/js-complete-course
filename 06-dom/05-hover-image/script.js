/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*
(function() {



    document.getElementById("kiss").addEventListener("mouseover", mouseOver);
    document.getElementById("kiss").addEventListener("mouseout", mouseOut);


    function mouseOver (){

        let change = document.getElementById("kiss").getAttribute('data-hover');

        let emoji = document.getElementById("kiss");

        emoji.src = change;


    }

    function mouseOut(){
        let change = document.getElementById("kiss").getAttribute('data-hover');

        let emoji = document.getElementById("kiss");

        emoji.src = '../../_shared/img/kiss.svg';

    }

})();

*/

(function(){

    document.getElementById("kiss").addEventListener("mouseover", mouseOver);
    document.getElementById("kiss").addEventListener("mouseout", mouseOut);

    var imageTag = document.getElementById("kiss");
    var change = imageTag.getAttribute("data-hover");
    var change2 = imageTag.getAttribute("src");

    function mouseOver() {
        imageTag.setAttribute("src", change);
    }

    function mouseOut(){
        imageTag.setAttribute("src", change2);
    }

})();
