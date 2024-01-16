gsap.registerPlugin(ScrollTrigger);




// gsap.from(".article-3", {
//     y: 100, 
//     duration : 0.5,
//     opacity: 0,
//     scrollTrigger : {
//         trigger: ".article-3",
//         markers: true,
//         start: "top 100%",
//         end: "top top"
//         // toggleClass: "rebounce"
//     }
// })
// gsap.from(".article-4", {
//     y: 100, 
//     duration : 0.5,
//     opacity: 0,
//     scrollTrigger : {
//         trigger: ".article-4",
//         markers: true,
//         start: "top center",
//         end: "top top",
//     }
// })
// gsap.from(".article-5", {
//     y: 100, 
//     duration : 0.5,
//     opacity: 0,
//     scrollTrigger : {
//         trigger: ".article-5",
//         markers: true,
//         start: "top center",
//         end: "top top",
//     }
// })


    //========================================================//
    //========================================================//

    const links = document.querySelectorAll('.aside-right a');

    links.forEach(item => item.addEventListener("click", (event)=>{
      event.preventDefault();
      document.querySelector('.charging').style.display = "flex";
      chargingAnimation();
      setTimeout(()=>{
        window.location.reload();
      }, 1600)
    }));

    
    function chargingAnimation() {
      let chargetl = gsap.timeline();
      chargetl.from('.charging', { duration : 0.8, x : -3000, ease: "Power2.easeOut"})
      .from('#myBar', {duration : 1, x : -600, ease: "Power2.easeOut"})
      .to('.charging', {duration : 1, x : 2000, ease: "Power2.easeOut"});
    }


    //===================================================//
    //=============Bounce AutoPlay=======================//
    //===================================================//

    const article2 = document.querySelector(".article-4");

    window.addEventListener("scroll", (event)=>{
      let scrolled = window.scrollY;

      let article2Position = article2.offsetTop;

      if(scrolled == article2Position) {
        console.log("scrolled")
        playMe();
      }
    })

    function playMe() {
      console.log("Just Scrolled");
    }