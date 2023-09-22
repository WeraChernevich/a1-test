gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,

})

gsap.fromTo('.game-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.game-section__content',
        start: 'center',
        end: 'bottom',
        scrub: true,
    }
})

gsap.fromTo('.game-section__left-hero', { x: 200 }, {
    x: 0,
    scrollTrigger: {
        trigger: '.game-section__content',
        scrub: true,
    }
})
gsap.fromTo('.game-section__right-hero', { x: -200 }, {
    x: 0,
    scrollTrigger: {
        trigger: '.game-section__content',
        scrub: true,
    }
})

gsap.fromTo('.main-vito', { opacity: 0 }, {
    opacity: 1,
    scrollTrigger: {
        trigger: '.main-vito__img',
        scrub: true,
    }

})