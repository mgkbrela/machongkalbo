window.onload = function(){
    var img = document.getElementById("macho"); 
    var audio = new Audio("pagupitako.mp3");
    var audio1 = new Audio("haircut.mp3");

    img.addEventListener('mouseup', function (){
        img.src = '2.png';
        audio.play().loop;
    });

    img.addEventListener('mousedown', function (){
        img.src = '3.png';
        audio1.play();
    });

}