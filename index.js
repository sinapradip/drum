
for(let i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", 
    
    function ()
    {
        var audio = new Audio("sounds/"+i+".mp3");
        audio.play();
        
        

    }
    );
}

document.addEventListener("keypress", 
    function (event) {
        if (event == "w")
        {
            var audio = new Audio("sounds/0.mp3");
            audio.play();
        }
    });