
(() => {
//create function to fetch data
    function Person(Name, Ego, Powers){
        this.names = Name;
        this.egos = Ego;
        this.abilities = Powers;

    }


    //create var for URL
    const Url = 'http://localhost:5000/_shared/api.json';


    //on click run getdata
    document.getElementById("run").onclick = function() {createHero()};
    //create template for object
    function createHero() {


          //create array for abilities
          let Powers1 =[];

          //get input
          let names1 = document.getElementById('hero-name').value;
          let egos1 = document.getElementById('hero-alter-ego').value;
          let abilities1= document.getElementById('hero-powers').value;

          //push abilities in powers
          Powers1.push(abilities1);

          console.log(Powers1);


           //var where hero object will be created
           let hero = new Person(names1,egos1,Powers1);
           console.log(hero);


       }






})();
