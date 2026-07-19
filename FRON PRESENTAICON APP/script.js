document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-zoom, .reveal-scale');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Animated Counters
    const counters = document.querySelectorAll('.stat-number');
    let hasCounted = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                hasCounted = true;
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // 2 seconds
                    const stepTime = Math.abs(Math.floor(duration / target));
                    let current = 0;

                    const timer = setInterval(() => {
                        current += 1;
                        // Add + or % depending on the text context if needed, here just numbers
                        counter.innerText = current + (target === 100 ? '%' : (target === 60 ? '' : (target === 99 ? '%' : ''))); 
                        // Let's refine the text display:
                        if(target === 100) counter.innerText = current + '%';
                        else if(target === 99) counter.innerText = current + '%';
                        else counter.innerText = current;

                        if (current >= target) {
                            clearInterval(timer);
                            if(target === 100) counter.innerText = '100%';
                            else if(target === 99) counter.innerText = '99%';
                            else if(target === 60) counter.innerText = '60';
                            else if(target === 24) counter.innerText = '24/7';
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.5 });

    const benefitsSection = document.querySelector('.benefits');
    if (benefitsSection) {
        counterObserver.observe(benefitsSection);
    }

    // 4. Ripple Effect on Buttons
    const rippleButtons = document.querySelectorAll('.ripple-btn');
    
    rippleButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.classList.add('ripple');
            
            this.appendChild(ripples);
            
            setTimeout(() => {
                ripples.remove();
            }, 600);
        });
    });

    // 5. Very subtle parallax on hero image
    const heroImage = document.querySelector('.hero-image-wrapper');
    document.addEventListener('mousemove', (e) => {
        if (!heroImage) return;
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        
        heroImage.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Initial Trigger for elements already in viewport on load
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);
});
