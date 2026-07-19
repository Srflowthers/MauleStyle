import { useEffect } from 'react'

export default function useInitEffects() {
  useEffect(() => {
    // 1. Header Scroll Effect
    const header = document.querySelector('.header')
    function onScroll() {
      if (window.scrollY > 50) header.classList.add('scrolled')
      else header.classList.remove('scrolled')
    }

    window.addEventListener('scroll', onScroll)

    // 2. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-zoom, .reveal-scale')
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    }, { root: null, threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    revealElements.forEach(el => revealObserver.observe(el))

    // 3. Animated Counters
    const counters = document.querySelectorAll('.stat-number')
    let hasCounted = false
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasCounted) {
          hasCounted = true
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target')
            const duration = 2000
            const stepTime = Math.abs(Math.floor(duration / (target || 1)))
            let current = 0
            const timer = setInterval(() => {
              current += 1
              if (target === 100 || target === 99) counter.innerText = current + '%'
              else counter.innerText = current
              if (current >= target) {
                clearInterval(timer)
                if (target === 24) counter.innerText = '24/7'
                else if (target === 60) counter.innerText = '60'
                else if (target === 100) counter.innerText = '100%'
              }
            }, stepTime)
          })
        }
      })
    }, { threshold: 0.5 })

    const benefitsSection = document.querySelector('.benefits')
    if (benefitsSection) counterObserver.observe(benefitsSection)

    // 4. Ripple Effect on Buttons
    const rippleButtons = document.querySelectorAll('.ripple-btn')
    function addRipple(e) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const ripples = document.createElement('span')
      ripples.style.left = x + 'px'
      ripples.style.top = y + 'px'
      ripples.classList.add('ripple')
      e.currentTarget.appendChild(ripples)
      setTimeout(() => ripples.remove(), 600)
    }
    rippleButtons.forEach(btn => btn.addEventListener('click', addRipple))

    // 5. Subtle parallax on hero image
    const heroImage = document.querySelector('.hero-image-wrapper')
    function onMouseMove(e) {
      if (!heroImage) return
      const x = (window.innerWidth - e.pageX * 2) / 100
      const y = (window.innerHeight - e.pageY * 2) / 100
      heroImage.style.transform = `translate(${x}px, ${y}px)`
    }
    document.addEventListener('mousemove', onMouseMove)

    // Initial trigger for elements already in viewport
    setTimeout(() => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) el.classList.add('active')
      })
    }, 100)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousemove', onMouseMove)
      rippleButtons.forEach(btn => btn.removeEventListener('click', addRipple))
      revealObserver.disconnect()
      counterObserver.disconnect()
    }
  }, [])
}
