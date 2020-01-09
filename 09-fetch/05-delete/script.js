

(() => {

    //create var for URL
    const Url = 'http://localhost:5000/_shared/api.json';

    //create function to fetch data
    async function Getdata() {

        //fetch stream of data
        let response = await fetch(Url);

        //convert it to json format
        data = await response.json();

        //get input from id
        let input;
        input = document.getElementById('hero-id').value ;
        //console.log (input );

        //match input id to id heroes
        //console.log(data.heroes[input])

        let x = input ;
        let name = data.heroes[x].name;
        let alterEgo = data.heroes[x].alterEgo;
        let abilities = data.heroes[x].abilities;
        let id = data.heroes[x].id;
        //console.log(name,alterEgo,abilities);

        //not === cuz id and input not same type
        data.heroes.splice(data.heroes.findIndex(function split(hero){
            return hero.id == x;}),1);

        console.log(data);

    }

    //on click run getdata
    document.getElementById("run").onclick = function() {Getdata()};
})();
