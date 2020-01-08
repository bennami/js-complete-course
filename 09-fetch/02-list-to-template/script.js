

(() => {

    //create var for URL
    const Url = 'http://localhost:5000/_shared/api.json';

    //create function to fetch data
    async function Getdata() {

        //fetch stream of data
        let response = await fetch(Url);

        //convert it to json format
        let data = await response.json();


        //loop to get every object for every hero
        for(i=0; i < 5; i++) {

            console.log( data.heroes[i].id);
            console.log( data.heroes[i].name);
            console.log( data.heroes[i].alterEgo);
            console.log( data.heroes[i].abilities);

        //get the tags of tpl-hero and put it in a variable
        let template =  document.getElementById('tpl-hero') ;

        //create a copy of the html tags inside tpl-hero;
        let template2 = template.content.cloneNode(true);

        //put object values inside according .class tag
        template2.querySelector('.name').innerHTML = data.heroes[i].name;
        template2.querySelector('.alter-ego').innerHTML = data.heroes[i].alterEgo;
        template2.querySelector('.powers').innerHTML = data.heroes[i].abilities;

        //append template to target
        document.getElementById('target').appendChild(template2);

        }
    }

    //click event to run function
    document.getElementById("run").onclick = function() {Getdata()};

})();
