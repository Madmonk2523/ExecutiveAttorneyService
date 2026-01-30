document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        this.setAttribute('aria-expanded', mobileNav.classList.contains('active'));
    });

    document.addEventListener('click', function(event) {
        if (!mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
            mobileNav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            mobileNav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});