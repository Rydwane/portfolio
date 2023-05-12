setTimeout(function(){
    var blocs = document.querySelectorAll('#compétence');
    for (var i = 0; i < blocs.length; i++){
        blocs[i].classList.add('visible');
    }
},1000);