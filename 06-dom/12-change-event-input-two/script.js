/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").onkeydown = function() {
//get input value
        let password = document.getElementById("pass-one").value;
//count length
        let n = password.length;
        let checkPassword = new RegExp("[0-9].*[0-9]");

        if (n >= 8 && checkPassword.test(password)) {
            document.getElementById('validity').innerHTML = 'ok';
            document.getElementById('pass-one').style.borderColor = "red";
        } else {
            document.getElementById('validity').innerHTML = 'not ok';
            document.getElementById('pass-one').style.borderColor = "red";
        }
    }



})();
