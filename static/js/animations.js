document.addEventListener("DOMContentLoaded", () => {
 
    // hero
    const triggerElement = window.innerWidth < 1024 ? '.about' : '.hero_section';
    const xElementHero = window.innerWidth < 1024 ? '20vw' : '50vw';

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

    // roadmap
    // image
    gsap.fromTo('.image_roadmap_container', { y: '0vw', }, {
        y: "20vw", ease: "none", scrollTrigger: {
            trigger: '.image_roadmap',
            start: "50% 100%",
            end: "100% 50%", 
            scrub: 5,
        }
    });


    // maps
    const map1 = window.innerWidth < 1024 ? '.map1' : '.image_roadmap';
    const map2 = window.innerWidth < 1024 ? '.map2' : '.image_roadmap';
    const map3 = window.innerWidth < 1024 ? '.map3' : '.image_roadmap';

    gsap.fromTo('.map1', { y: '0vw', }, {
        y: "-300px", ease: "none", scrollTrigger: {
            trigger: map1,
            start: "50% 100%",
            end: "100% 50%", 
            scrub: 3,
        }
    });
    gsap.fromTo('.map2', { y: '0vw', }, {
        y: "-200px", ease: "none", scrollTrigger: {
            trigger: map2,
            start: "50% 100%",
            end: "100% 50%", 
            scrub: 3,
        }
    });
    gsap.fromTo('.map3', { y: '0vw', }, {
        y: "-100px", ease: "none", scrollTrigger: {
            trigger: map3,
            start: "50% 100%",
            end: "100% 50%", 
            scrub: 3,
        }
    });

});