

(function() {

    //create empty array and get text from html
    let text = document.getElementById('target').innerHTML;


    // split to make string of every character in text
    let arrnew = text.split("");


    // reasign
    document.getElementById('target').innerHTML = '';

    let sectionID = document.getElementById('target');
    let spanElement = [];

    //create for loop to count every 20 elements
    for ( i=0; i< arrnew.length ; i +=20){

    //create array of font sizes
    let fontsize = [70,80,90,100,110,130,140,150,160,170,180];


    //create for loop to count every 10 elements
        for(j=0; j<10; j++){
            if (i+j < arrnew.length){

                //create span tag
                spanElement[i+j] = document.createElement('span');

                //create style attribute font style
                spanElement[i+j].setAttribute('style','font-size:'+ fontsize[j] +'%');

                //assign style attr to span element
                let content = document.createTextNode(arrnew[i+j]);
                spanElement[i+j] .appendChild(content);
                sectionID.appendChild(spanElement[i+j]);
            }
        }
        //use count to start count the array from the end(last string has a value of 10)
        let count = 10;
        //for loop to decrease fontsize on next 10 elements

        for(x=10;x<20;x++){
            if (i+x < arrnew.length){

                //repeat same as above but use count to loop backwards so font size decreases
                spanElement[i+x] = document.createElement('span');
                spanElement[i+x].setAttribute('style','font-size:'+ fontsize[count]+'%');
                let content = document.createTextNode(arrnew[i+x]);
                spanElement[i+x] .appendChild(content);
                sectionID.appendChild(spanElement[i+x]);

                //decrease value of count to loop through array backwards
                count--;
            }
        }
    }

})();
