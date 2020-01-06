

(function() {

    document.getElementById("bodyload").onload = function() {myFunction()};

    function myFunction() {

        //create p tag to put number in
        let p =  document.createElement('p');
        p.setAttribute('id', 'number');
        document.getElementById('section').appendChild(p);


        let calc2;
        let random=[];
        //create 100 random numbers
        for(let i = 1; i <= 100; i ++){

          calc2 = (Math.floor(Math.random()*100)+1);

          //push result into empty array
          random.push(calc2);
        }
        console.log(random);

        //get random string from array
        let X = random[Math.floor(Math.random()*random.length)];
        console.log(X);

       let question ="";

       let count = 0;


while(question !== X){

     question = prompt('guess which number X is');
    if ( question < X){

        alert('try a higher number!');
count++;
    }else if (question > X){

        alert('try a lower number');
 count++;
    }    else{

        alert('correct! the answer is '+ X + ' you guessed '+ count + ' times');
        return;

    }

}











    }

})();
