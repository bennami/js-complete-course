

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
    } else{
            alert('thanks!');
           }


})();
