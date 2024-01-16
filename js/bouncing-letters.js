document.querySelectorAll(".bouncing-letters span").forEach(span => {
    span.addEventListener('mouseover', ()=> {
        span.classList.add('bounce')
        setTimeout(()=> {
            span.classList.remove('bounce');
        }, 500)
    })  
}
)

let bounceLetter = function () {
    this.classList.add("bounce");
    setTimeout(function () {
        this.classList.remove("bounce");
    }.bind(this), 1000);
};