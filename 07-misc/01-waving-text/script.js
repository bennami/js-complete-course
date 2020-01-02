

(function() {
//create empty array and get text from html

    let text = document.getElementById('target').innerHTML;
    let fontsize = 0;

console.log(text[7]);
// split to make string of every character in text
    let arrnew = text.split("");
    console.log(arrnew);

// reasign
    document.getElementById('target').innerHTML = '';


//loop through string to change font
   let i;
   for (i= 0; i < arrnew.length; i++){

      console.log(arrnew[i]);
      let sizes = parseInt(fontsize)+i *10;
      console.log(sizes);

//create span and place string inside each span
        let element = document.createElement('span');
        let content = document.createTextNode(arrnew[i]);
//create attribute style for each span
        element.setAttribute('style','font-size:'+ sizes +'%');
//append content to span
        element.appendChild(content);
//place spans inside targets
        let section = document.getElementById('target');
        section.appendChild(element);
//decrease font size


   }




})();
