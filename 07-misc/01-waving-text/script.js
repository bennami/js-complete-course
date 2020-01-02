

(function() {
//create empty array and get text from html
    let arr = [];
    let text = document.getElementById('target').innerHTML;
    let fontsize = document.getElementById('target').style.fontSize = '100%';


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
      let sizes = parseInt(fontsize)+i *10;
      console.log(sizes *2);


        let element = document.createElement('span');
        let content = document.createTextNode(arrnew[i++]);
        element.appendChild(content);
        let section = document.getElementById('box');
        let child = document.getElementById('target');
        section.insertBefore(element,child);
        let Sizefull= 'font-size:'+sizes+'%';
        document.getElementById('target').style.fontSize = '100%';
        element.setAttribute('style',  Sizefull);

       if (sizes >= 300){
           sizes -= 50
       } else{
    sizes *= 50
       }
   }

//create p where array is placed


})();
