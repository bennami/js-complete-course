

(function() {
//create empty array and get text from html
    let arr = [];
    let text = document.getElementById('target').innerHTML;
    let fontsize = document.getElementById('target').style.fontSize = '100%';

    let element = document.createElement('p');

//push text into array
    arr.push(text);
    console.log(arr);

// split to make string of every character in text
    let arrnew = text.split("");
    console.log(arrnew);

// reasign
  document.getElementById('target').innerHTML = arrnew;
//loop through string to change font

   for (i=0; i< arrnew.length; i++){

      console.log(arrnew[i]);
      element = arrnew[i];
      let sizes = parseInt(fontsize)+i *5;
      console.log(sizes *2);

   }
})();
