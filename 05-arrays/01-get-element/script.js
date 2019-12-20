
(function() {
    document.getElementById('run').addEventListener("click", function () {

    document.getElementById(run);
    var fruits = ["apple","pear","raspberry","tomatoes","kiwi","banana","orange","mandarin","durian","peache","grap","cherry",];

    alert(fruits[3]);

    });
//object
   // var fruits = [ {name: "apple"}, {name: "pear"}, {name: "raspberry"}, {name: "tomatoes"}, {name: "kiwi"}, {name: "banana"}, {name: "orange"}, {name: "mandarin"}, {name: "durian"}, {name: "peache"}, {name: "grap"}, {name: "cherry"},];


//for method: easy way to loop through an array.
   // for ( let i =0; i < fruits.length; i++) {
   // console.log(fruits.indexOf());  //console.log(fruits [i]);    // loops through elements in array

   // }


//foreach does same as above, but neater. takes a callback function

    //fruits.forEach(function(fruits){

   // });

//filter

  //let getThree = fruits.filter(function(fruits){

     // if (fruits === 3){
        //  return true;
     // }
 // });
  //console.log(fruits);

})();
