const sound = document.querySelector(".sound-off");

let on = true;

sound.addEventListener("click", (event)=>{
    event.preventDefault();
    if(on) {
        sound.innerHTML = 'ON';
        on = !on;
    }
    else {
        sound.innerHTML = 'OFF';
        on = !on;
    }
})