/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //create table and tbody
    let table = document.createElement('table');


//append table to target
    document.getElementById("target").append(table);



//first loop to create tr
    for (i=1; i <=10; i++){

        let row = document.createElement("tr");
        table.appendChild(row);

        console.log(row);

        // a loop inside a loop to insert td inside row
        for (x = 1; x<=10; x++){
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(i*x));

        }

    }
})();
