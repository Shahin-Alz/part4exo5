let myDiv = document.getElementById('content');



myDiv.addEventListener('click',function (e) {
    let target = e.target;
        // Mise en place d'un bord rouge sur l'élément ciblé
        target.style.border = "1px solid red";
})

