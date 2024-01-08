document.querySelectorAll(".bouncing-letters span").forEach(span => {
    console.log('found')
    span.addEventListener('mouseover', ()=> {
        span.classList.add('bounce')
        setTimeout(()=> {
            span.classList.remove('bounce');
        }, 500)
    })  
}
)