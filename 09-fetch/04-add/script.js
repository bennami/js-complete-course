
(() => {


    //create var for URL
    const Url = 'http://localhost:5000/_shared/api.json';

    //on click run getdata
    document.getElementById("run").onclick = function() {Getdata()};



       //create function to fetch data
       async function Getdata() {

          //fetch stream of data
          let response = await fetch(Url);

          //convert it to json format
          let data = await response.json();
          console.log(data);


          //create array for abilities
          let powers =[];
          //get input
          let name = document.getElementById('hero-name').value;
          let ego = document.getElementById('hero-alter-ego').value;
          let abilities= document.getElementById('hero-powers').value;

          //push abilities in powers
          powers.push(abilities);

          //console.log(name, ego, powers);

          //create template for object
           function Person(names, ego, powers){
               this.names = name;
               this.egos = ego;
               this.powers = abilities;

           }



           //var where hero object will be created
           let hero = new Person(name,ego,abilities);
           console.log(hero);


       }






})();
