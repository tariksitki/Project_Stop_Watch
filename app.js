
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let milisecond = document.querySelector(".milisecond");
let pause = document.querySelector(".pause");
let stop = document.querySelector(".stop");
let buttons_div = document.querySelector(".buttons-div");
let mySet = "";

buttons_div.addEventListener("click", (e) => {
    if (e.target.className == "fa fa-play-circle-o play") {
        e.target.className = "fa fa-pause-circle-o pause"
        mySet = setInterval(timer, 10); // myset i const let olmadan tanimladik

    } else if (e.target.className == "fa fa-pause-circle-o pause") {
        e.target.className = "fa fa-play-circle-o play";
        clearInterval(mySet);
    
    }   else if (e.target.className == "fa fa-stop-circle-o stop") {
            clearInterval(mySet);
            minute.innerText = "00";
            second.innerText = "00";
            milisecond.innerText = "00";
            e.target.parentElement.parentElement.firstElementChild.firstElementChild.className = "fa fa-play-circle-o play";  
    }    
});

function timer() {
    milisecond.innerText = (Number(milisecond.innerText) + 1).toString().padStart(2, 0);
    if (milisecond.innerText == 100) {
        second.innerText = (Number(second.innerText) + 1).toString().padStart(2, 0);
        milisecond.innerText = "00";
    } else if (second.innerText == 60) {
        minute.innerText = (Number(minute.innerText) + 1).toString().padStart(2, 0);
        second.innerText = "00";
    };
};

   

