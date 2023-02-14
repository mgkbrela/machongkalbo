window.onload = function(){
    var img = document.getElementById("popcat1"); 
    var audio = new Audio("pop.mp3");

    img.addEventListener('mouseup', function (){
        img.src = '2.png';
        audio.play();
    });

    img.addEventListener('mouseup', function (){
        img.src = '3.png';
        audio.play();
    });


    img.addEventListener('mousedown', function () {
        img.src = '1.png';
    });
   

}
