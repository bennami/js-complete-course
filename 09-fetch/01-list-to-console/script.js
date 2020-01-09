


(() => {

    document.getElementById("run").onclick = function() {catchXmen()};

//solution without async finction

function hey() {

    fetch('http://localhost:5000/_shared/api.json').then( response => {

    return response.json();

    }).then(content =>{

    console.log(content);

    })


    }

// the async function way
    async function catchXmen() {

    const  response = await fetch('http://localhost:5000/_shared/api.json ');
    const json = await response.json();
    console.log(json);

    }




//https://www.youtube.com/watch?v=tc8DU14qX6I







})();
