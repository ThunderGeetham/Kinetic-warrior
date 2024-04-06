var click = function() {
    var btn = document.getElementsByClassName("more-btn")[0]
    var list = document.getElementsByClassName("more")[0]

    if (list.style.display == "flex"){
        btn.innerHTML = "≡"
        btn.animate([

            {scale:1},
            
            {scale:0},

            {scale:1}

        ],{

            duration:500,
            iterations:1

        })
        list.style.display = "none" 

    }
    else {
        list.style.display = "flex" 
        btn.innerHTML = "✖",
        btn.animate([

            {scale:1},
            
            {scale:0},

            {scale:1}

        ],{

            duration:500,
            iterations:1

        })
        btn.innerHTML = "✖"
        list.animate([

            {opacity:0},
            {opacity: 1}

        ],{

            duration:500,
            iterations:1,

        })
    }
    

}

window.onload = function(){
    var btn = document.getElementsByClassName("more-btn")[0]
    btn.addEventListener("click", click)
}

