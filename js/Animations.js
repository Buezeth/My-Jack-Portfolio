
gsap.from('.bouncing-letters', {opacity : 0, duration : 1, y : -50, stagger: 0.2, ease: "Power2.easeInOut"});

gsap.registerPlugin(SplitText, ScrollTrigger);
/* --- Split the text, Burrowing Owl --- */
function setupSplits() {
  
    var tlSplitBurrowing = gsap.timeline(), 
        SplitBurrowing = new SplitText("article", {type:"words"}), 
        chars = SplitBurrowing.words; //an array of all the divs that wrap each character
    
    
    tlSplitBurrowing.from(chars, {
      duration: 0.08,
      opacity:0,
      y:-10,
      ease:"circ.in",
      stagger: 0.02,
    scrollTrigger: {
        trigger: "article",
        markers:true,   
        scrub:1,
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
    
    // ScrollTrigger.addEventListener("refresh", setupSplits())


    //ScrollTrigger.addEventListener("scrollEnd", () => SplitBurrowing.revert());
    // setupSplits();