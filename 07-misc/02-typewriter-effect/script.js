

(function() {
//document.addEventListener('DOMContentLoaded',init);
    let i = 0;
    let txt = document.getElementById('target').innerHTML;
    console.log(txt);
    const speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById('target').innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
typeWriter();
})();
