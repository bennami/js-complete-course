

(() => {



    //create var for URL
    const Url = 'http://localhost:5000/_shared/api.json';



    //create function to fetch data
    async function Getdata() {

        //fetch stream of data
        let response = await fetch(Url);

        //convert it to json format
        data = await response.json();
        console.log(data);
        //loop through heroes to get names



        //get input from id
        let input;
        input = document.getElementById('hero-id').value ;
        console.log (input );

        //match input id to id heroes
        //console.log(data.heroes[input])


        let x = input -1;
        let name = data.heroes[x].name;
        let alterEgo = data.heroes[x].alterEgo;
        let abilities = data.heroes[x].abilities;




            //get the tags of tpl-hero and put it in a variable
            let template =  document.getElementById('tpl-hero') ;

            //create a copy of the html tags inside tpl-hero;
            let template2 = template.content.cloneNode(true);

            //put object values inside according .class tag
            template2.querySelector('.name').innerHTML = name;
            template2.querySelector('.alter-ego').innerHTML = alterEgo;
            template2.querySelector('.powers').innerHTML = abilities;

            //append template to target
            document.getElementById('target').appendChild(template2);

    }

    //on click run getdata
    document.getElementById("run").onclick = function() {Getdata()};









})();
