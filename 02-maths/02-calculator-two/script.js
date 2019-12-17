/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function calc('this.id') {
    let number1 = document.getElementById ("op-one" ).value;
    let number2 = document.getElementById ("op-two" ).value ;


    switch (calc()){
        case 'addition':
            let result = parseInt(number1) + parseInt(number2);
            alert (result);
            break;
        case 'substraction':
            let result = parseInt(number1) - parseInt(number2);
            alert (result);
            break;
        case 'multiplication':
            let result = parseInt(number1) - parseInt(number2);
            alert (result);
            break;
        case 'division':
            let result = parseInt(number1) - parseInt(number2);
            alert (result);
            break;
    }



}


