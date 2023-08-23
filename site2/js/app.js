window.addEventListener('scroll', e=> {
	document.body.style.cssText += `--scroll-top: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})