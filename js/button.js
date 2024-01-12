const btn = document.querySelector('button');
btn.addEventListener("mouseover", (event) => {
    const x = event.pageX - btn.offsetLeft;
    const y = event.pageY - btn.offsetTop;
    
    console.log(x);
    console.log(y);
    btn.style.setProperty("--xPos", y + "px");
    btn.style.setProperty("--yPos", x + "px");
});