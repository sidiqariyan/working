import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const fadeInUp = (element, options = {}) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const fadeInLeft = (element, options = {}) => {
  return gsap.from(element, {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const fadeInRight = (element, options = {}) => {
  return gsap.from(element, {
    x: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const scaleIn = (element, options = {}) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const staggerFadeIn = (elements, options = {}) => {
  return gsap.from(elements, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const parallaxEffect = (element, speed = 0.5) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
}

export const rotateIn = (element, options = {}) => {
  return gsap.from(element, {
    rotation: 180,
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const slideInFromBottom = (element, options = {}) => {
  return gsap.from(element, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const countUpAnimation = (element, endValue, options = {}) => {
  const obj = { value: 0 }
  return gsap.to(obj, {
    value: endValue,
    duration: 2,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.ceil(obj.value)
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const morphAnimation = (element, options = {}) => {
  return gsap.to(element, {
    morphSVG: options.target,
    duration: 1.5,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true,
    ...options
  })
}

export const hoverScale = (element, scale = 1.05) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, { scale, duration: 0.3, ease: 'power2.out' })
  })

  element.addEventListener('mouseleave', () => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' })
  })
}

export const magneticEffect = (element, strength = 0.3) => {
  const bounds = element.getBoundingClientRect()

  element.addEventListener('mousemove', (e) => {
    const x = (e.clientX - bounds.left - bounds.width / 2) * strength
    const y = (e.clientY - bounds.top - bounds.height / 2) * strength

    gsap.to(element, {
      x,
      y,
      duration: 0.6,
      ease: 'power2.out'
    })
  })

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.3)'
    })
  })
}

export const textRevealAnimation = (element, options = {}) => {
  const text = element.textContent
  element.innerHTML = text
    .split('')
    .map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('')

  return gsap.from(element.querySelectorAll('.char'), {
    opacity: 0,
    y: 50,
    rotationX: -90,
    stagger: 0.02,
    duration: 0.8,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const wavyTextAnimation = (element) => {
  const text = element.textContent
  element.innerHTML = text
    .split('')
    .map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('')

  const chars = element.querySelectorAll('.char')

  gsap.to(chars, {
    y: -10,
    duration: 0.5,
    stagger: {
      each: 0.05,
      repeat: -1,
      yoyo: true
    },
    ease: 'sine.inOut'
  })
}

export const cardFlipAnimation = (element, options = {}) => {
  element.style.transformStyle = 'preserve-3d'

  return gsap.from(element, {
    rotationY: 180,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const liquidEffect = (element, options = {}) => {
  return gsap.to(element, {
    skewX: 10,
    skewY: 5,
    duration: 0.5,
    ease: 'elastic.out(1, 0.3)',
    yoyo: true,
    repeat: 1,
    ...options
  })
}

export const bounceIn = (element, options = {}) => {
  return gsap.from(element, {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: 'elastic.out(1, 0.5)',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const blurIn = (element, options = {}) => {
  return gsap.from(element, {
    filter: 'blur(20px)',
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger
    },
    ...options
  })
}

export const glitchEffect = (element) => {
  const tl = gsap.timeline({ repeat: 3, repeatDelay: 0.5 })

  tl.to(element, { x: -3, duration: 0.1 })
    .to(element, { x: 3, duration: 0.1 })
    .to(element, { x: -3, duration: 0.1 })
    .to(element, { x: 0, duration: 0.1 })

  return tl
}

export const initScrollAnimations = () => {
  ScrollTrigger.refresh()
}

export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}
