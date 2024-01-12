gsap.registerPlugin(ScrollTrigger, SplitText);

// gsap.from('.bouncing-letters', {opacity : 0, duration : 1, y : -50, stagger: 0.2, ease: "Power2.easeInOut"});

// gsap.from(".article-3", {
//     y: 100, 
//     duration : 1,
//     opacity: 0,
//     scrollTrigger : {
//         trigger: ".article-3 .bouncing-letters span",
//         markers: true,
//         start: "center bottom",
//         // end: () => `+=${document.querySelector('article-3 .p-open-tag').offsetHeight}`,
//         // toggleClass: "rebounce"
//     }
// })


/* --- Split the text, Burrowing Owl --- */
function setupSplits() {
  
    var tlSplitBurrowing = gsap.timeline(), 
        SplitBurrowing = new SplitText(".article-3", {type:"char"}), 
        chars = SplitBurrowing.chars; //an array of all the divs that wrap each character
    
    
    tlSplitBurrowing.from(chars, {
      duration: 1,
      opacity:0,
      y:-10,
      ease:"circ.in",
      stagger: 0.02,
    scrollTrigger: {
        trigger: ".article-2",
        markers:true,   
        // scrub:1,
        start: "top center",
       end: "top center"
      }
    //,   onComplete: () => {SplitBurrowing.revert()}
    }, "+=0");
    
    // window.addEventListener('resize', function() {
      // SplitBurrowing.revert();
    // });

      
    };
    
    /*
    ScrollTrigger.addEventListener("scrollEnd", function() {
        SplitBurrowing.revert();
    });
    */
    
    ScrollTrigger.addEventListener("refresh", setupSplits())


    //ScrollTrigger.addEventListener("scrollEnd", () => SplitBurrowing.revert());
    // setupSplits();

    //========================================================//
    //========================================================//

    const links = document.querySelectorAll('.aside-right a');

    links.forEach(item => item.addEventListener("click", (event)=>{
      event.preventDefault();
      document.querySelector('.charging').style.display = "flex";
      // gsap.from('.charging', {opacity : 1, duration : 1, x : -3000, stagger: 0.2, ease: "Power2.easeOut"});
      chargingAnimation();
      setTimeout(()=>{
        document.querySelector('.charging').style.display = "none";
      }, 2000)
    }));

    
    function chargingAnimation() {
      let chargetl = gsap.timeline();
      chargetl.from('.charging', { duration : 0.8, x : -3000, ease: "Power2.easeOut"})
      .from('#myBar', {duration : 1, x : -600, ease: "Power2.easeOut"})
      .to('.charging', {duration : 1, x : 2000, ease: "Power2.easeOut"});
    }

    //=====Progress Bar========//
    var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}