

(function() {
//create emptty array and get text from html
    let arr = [];
    let text = document.getElementById('target').innerHTML;

//push text into array
    arr.push(text);
//console.log(arr);
// split to make string of every character in text
let arrnew = text.split("");
    //console.log(arrnew);
//loop through string to change font
  let i=0;
  let newsize =  document.getElementById('target').style.fontSize;
for (i ; i < arrnew.length; i++){

     newsize++;

}
    console.log(arrnew[i]);
})();
