document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobile-menu');
    const header = document.getElementById('site-header');
    const body = document.body;

    if (!hamburger || !mobileNav) {
        return;
    }

    const closeMenu = () => {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        body.classList.remove('no-scroll');
    };

    const openMenu = () => {
        mobileNav.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        body.classList.add('no-scroll');
    };

    hamburger.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    mobileNav.addEventListener('click', (event) => {
        const target = event.target;
        if (target instanceof HTMLElement && target.tagName === 'A') {
            closeMenu();
        }
    });

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (
            mobileNav.classList.contains('open') &&
            target instanceof HTMLElement &&
            !mobileNav.contains(target) &&
            !hamburger.contains(target)
        ) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    const handleScroll = () => {
        if (!header) {
            return;
        }
        if (window.scrollY > 8) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.18 }
        );

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add('visible'));
    }
});