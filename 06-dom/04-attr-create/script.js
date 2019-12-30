

(function() {
    let data = document.getElementById('source').getAttribute('data-image');

    let newimg = document.createElement( 'img');
    newimg.src = data;
    document.getElementById("target").append(newimg);

    document.getElementById('source').remove();
})();
