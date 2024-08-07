document.addEventListener("DOMContentLoaded", () => {
 
    // hero
    const triggerElement = window.innerWidth < 1024 ? '.about' : '.hero_section';
    const xElementHero = window.innerWidth < 1024 ? '0vw' : '50vw';

    gsap.fromTo('.plane_animation', { x: xElementHero, }, {
        x: "-60vw", ease: "none", scrollTrigger: {
            trigger: triggerElement,
            start: "50% 100%",
            end: "100% 50%", 
            scrub: 5,
        }
    });


    // about  
    gsap.fromTo('.ballon_left', { x: '-20vw', }, {
        x: "30vw", ease: "none", scrollTrigger: {
            trigger: '.about',
            start: "0% 100%",
            end: "100% 50%", 
            scrub: 1,
        }
    });

    gsap.fromTo('.ballon_right', { x: '30vw', }, {
        x: "-30vw", ease: "none", scrollTrigger: {
            trigger: '.about',
            start: "0% 100%",
            end: "100% 50%", 
            scrub: 1,
        }
    });

    // tokenomics
    gsap.fromTo('.token1', { x: '-10vw', y: '-0vw' }, {
        x: "10vw", y: '10vw', ease: "none", scrollTrigger: {
            trigger: '.token_image',
            start: "0% 100%",
            end: "100% 50%", 
            scrub: 3,
        }
    });

    gsap.fromTo('.token2', { x: '20vw', y: '0vw' }, {
        x: "-20vw", y: '10vw', ease: "none", scrollTrigger: {
            trigger: '.token_image',
            start: "0% 100%",
            end: "100% 50%", 
            scrub: 3,
        }
    });

    gsap.fromTo('.token3', { x: '-10vw', y: '10vw' }, {
        x: "10vw", y: '0vw', ease: "none", scrollTrigger: {
            trigger: '.token_image',
            start: "0% 100%",
            end: "100% 50%", 
            scrub: 4,
        }
    });

    gsap.fromTo('.token4', { x: '20vw', y: '10vw' }, {
        x: "-20vw", y: '0vw', ease: "none", scrollTrigger: {
            trigger: '.token_image',
            start: "0% 100%",
            end: "100% 50%", 
            scrub: 4,
        }
    });

    // how to buy 

});