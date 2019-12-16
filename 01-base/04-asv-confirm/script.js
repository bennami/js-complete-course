/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   let age;
   let gender;
   let town;

   age = prompt('how old are you?');
   gender = prompt ('what is your gender');
   town = prompt('where do you live?');


    let check = confirm ('is this correct?'+ "\n" + age + "\n" +gender + "\n"+town);

    if (check === false) {
        location.reload();
    }
            else{
            alert('thanks!');
            }




})();
