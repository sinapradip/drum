// Query selector for each of letters beacused looping is slow in live site.

document.querySelectorAll("button")[0].addEventListener( "click", function () {
    var audio = new Audio("sounds/0.mp3");
    audio.play();
}
);


document.querySelectorAll("button")[1].addEventListener( "click", function () {
    var audio = new Audio("sounds/1.mp3");
    audio.play();
}
);

document.querySelectorAll("button")[2].addEventListener( "click", function () {
    var audio = new Audio("sounds/2.mp3");
    audio.play();
}
);

document.querySelectorAll("button")[2].addEventListener( "click", function () {
    var audio = new Audio("sounds/2.mp3");
    audio.play();
}
);

document.querySelectorAll("button")[3].addEventListener( "click", function () {
    var audio = new Audio("sounds/3.mp3");
    audio.play();
}
);

document.querySelectorAll("button")[4].addEventListener( "click", function () {
    var audio = new Audio("sounds/4.mp3");
    audio.play();
}
);

document.querySelectorAll("button")[5].addEventListener( "click", function () {
    var audio = new Audio("sounds/5.mp3");
    audio.play();
}
);

document.querySelectorAll("button")[6].addEventListener( "click", function () {
    var audio = new Audio("sounds/6.mp3");
    audio.play();
}
);

// End of query selector for each click


document.addEventListener('keypress', function (e) {
    if (e.key === 'a') {
        var audio = new Audio("sounds/0.mp3");
        audio.play();
    }

    if (e.key === 's') {
        var audio = new Audio("sounds/1.mp3");
        audio.play();
    }

    if (e.key === 'd') {
        var audio = new Audio("sounds/2.mp3");
        audio.play();
    }

    if (e.key === 'f') {
        var audio = new Audio("sounds/3.mp3");
        audio.play();
    }

    if (e.key === 'j') {
        var audio = new Audio("sounds/4.mp3");
        audio.play();
    }

    if (e.key === 'k') {
        var audio = new Audio("sounds/5.mp3");
        audio.play();
    }

    if (e.key === 'l') {
        var audio = new Audio("sounds/6.mp3");
        audio.play();
    }
});

// end of event listener on keypress


//animation when button is clicked and released

document.addEventListener("keypress", function(e)
    {
        buttonAnimation(e.key);
    }
)



function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    for(var i=0;i<7;i++)
    {
        activeButton.classList.add("pressed");
        setTimeout( function ()
            {
                activeButton.classList.remove("pressed");
            }
        , 100);
        
    }
    

}
