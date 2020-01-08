

(() => {

    //create var for URL
    const Url = 'http://localhost:5000/_shared/api.json';

    //create var for scope


    //create function to fetch data
    async function Getdata() {

        //fetch stream of data
        let response = await fetch(Url);

        //convert it to json format
       let data = await response.json();


        for(i=0; i < 5; i++) {


            console.log( data.heroes[i].name);


        }



    }

    //clcik event to run function
    document.getElementById("run").onclick = function() {Getdata()};

})();
