
function calc(sali) {
    let number1 = document.getElementById ("op-one" ).value;
    let number2 = document.getElementById ("op-two" ).value ;
    let result;

    switch (sali){
        case 'addition':
            result = parseInt(number1) + parseInt(number2);
            alert (result);
            break;
        case 'substraction':
            result = parseInt(number1) - parseInt(number2);
            alert (result);
            break;
        case 'multiplication':
           result = parseInt(number1) * parseInt(number2);
            alert (result);
            break;
        case 'division':
            result = parseInt(number1) / parseInt(number2);
            alert (result);
            break;
    }



}
