document.addEventListener('DOMContentLoaded', () => {

    /* === Burger Mobile Nav === */
    const burger = document.querySelector('.nav-burger');
    const links = document.querySelector('.nav-links');
    if (burger && links) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            links.classList.toggle('open');
        });
        links.querySelectorAll('a').forEach(a =>
            a.addEventListener('click', () => {
                burger.classList.remove('active');
                links.classList.remove('open');
            })
        );
    }

    /* === Smooth Scroll === */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* === Infinite Carousel — clone slides for seamless loop === */
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });
    }

    /* === Fade-up Observer === */
    const observed = document.querySelectorAll('.fade-up');
    if (observed.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
        observed.forEach(el => io.observe(el));
    }

});
