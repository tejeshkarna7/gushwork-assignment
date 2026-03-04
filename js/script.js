// ===== GALLERY CAROUSEL ===== //
document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('mainImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const thumbnails = document.querySelectorAll('.thumbnail');
    let currentIndex = 0;

    // Gallery image data (you can update these paths based on your images)
    const galleryImages = [
        'assets/hero.jpg',
        'assets/hero.jpg',
        'assets/hero.jpg',
        'assets/hero.jpg',
        'assets/hero.jpg',
        'assets/hero.jpg'
    ];

    let isMovingNext = true; // Track direction

    function updateGallery(index, direction = 'next') {
        if (index >= galleryImages.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = galleryImages.length - 1;
        } else {
            currentIndex = index;
        }

        // Fade out current image
        mainImage.classList.remove('active-image', 'slide-left');

        // Update main image with delay for smooth transition
        setTimeout(() => {
            mainImage.src = galleryImages[currentIndex];
            mainImage.classList.add('active-image');

            // Apply direction-based animation
            if (direction === 'prev') {
                mainImage.classList.add('slide-left');
            } else {
                mainImage.classList.remove('slide-left');
            }
        }, 250);

        // Update thumbnail active state
        thumbnails.forEach((thumb, i) => {
            thumb.classList.remove('active');
            if (i === currentIndex) {
                thumb.classList.add('active');
            }
        });
    }

    // Initialize gallery with first image active
    if (mainImage) {
        mainImage.classList.add('active-image');

        // ===== IMAGE ZOOM ON HOVER ===== //
        mainImage.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            this.style.transformOrigin = `${x}% ${y}%`;
            this.classList.add('zoomed');
        });

        mainImage.addEventListener('mouseleave', function () {
            this.classList.remove('zoomed');
            setTimeout(() => {
                if (!this.classList.contains('zoomed')) {
                    this.style.transformOrigin = 'center center';
                }
            }, 300);
        });
    }

    // Next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            updateGallery(currentIndex + 1, 'next');
        });
    }

    // Previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            updateGallery(currentIndex - 1, 'prev');
        });
    }

    // Thumbnail click
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', function () {
            // Determine direction based on thumbnail position
            const direction = index > currentIndex ? 'next' : 'prev';
            updateGallery(index, direction);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (mainImage && mainImage.closest('.hero-gallery')) {
            if (e.key === 'ArrowRight') {
                updateGallery(currentIndex + 1, 'next');
            } else if (e.key === 'ArrowLeft') {
                updateGallery(currentIndex - 1, 'prev');
            }
        }
    });

    // ===== FAQ ACCORDION ===== //
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            // Close other items if desired (single open at a time)
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //         otherItem.classList.remove('active');
            //     }
            // });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ===== SMOOTH SCROLL FOR NAVIGATION ===== //
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }
        });
    });

    // ===== CTA FORM HANDLING ===== //
    const ctaForm = document.querySelector('.cta-form');
    if (ctaForm) {
        ctaForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;

            if (email) {
                alert(`Thank you! We'll contact you at ${email} soon.`);
                this.reset();
            }
        });
    }

    // ===== BUTTON INTERACTIONS ===== //
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');

    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            // Add ripple effect
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            ripple.style.pointerEvents = 'none';

            if (this.style.position !== 'absolute' && this.style.position !== 'fixed') {
                this.style.position = 'relative';
            }

            this.appendChild(ripple);

            // Animate ripple
            const size = Math.max(rect.width, rect.height);
            ripple.animate(
                [
                    { width: '0px', height: '0px', opacity: 1 },
                    { width: size + 'px', height: size + 'px', opacity: 0 },
                ],
                {
                    duration: 600,
                    easing: 'ease-out',
                }
            );

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ===== SCROLL ANIMATIONS ===== //
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // ===== HERO IMAGE ANIMATION ===== //
    const heroImage = document.querySelector('.hero-img');
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'scale(0.95)';
        setTimeout(() => {
            heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'scale(1)';
        }, 100);
    }

    // ===== FEATURE CARDS STAGGER ANIMATION ===== //
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

        observer.observe(card);
    });

    // ===== PERFORMANCE CARDS NUMBER COUNTER ===== //
    const performanceCards = document.querySelectorAll('.performance-card h3');

    const startCounter = (element) => {
        const finalValue = parseInt(element.textContent);
        if (isNaN(finalValue)) return;

        let currentValue = 0;
        const increment = finalValue / 50;
        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                element.textContent = element.textContent.replace(/\d+/, finalValue);
                clearInterval(interval);
            } else {
                element.textContent = Math.floor(currentValue) + element.textContent.slice(-1);
            }
        }, 30);
    };

    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    performanceCards.forEach((card) => {
        counterObserver.observe(card);
    });

    // ===== RESOURCE CARDS HOVER EFFECT ===== //
    const resourceItems = document.querySelectorAll('.resource-item');
    resourceItems.forEach((item) => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-4px)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // ===== BRAND LOGO OBSERVER ===== //
    const brandObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.5s ease ${index * 0.05}s forwards`;
            }
        });
    });

    document.querySelectorAll('.brand-logo').forEach((logo) => {
        logo.style.opacity = '0';
        brandObserver.observe(logo);
    });

    // ===== ADD ANIMATION STYLES DYNAMICALLY ===== //
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);

    // ===== HEADER SHADOW & STICKY ON SCROLL ===== //
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;
        const foldHeight = 300; // Trigger after scrolling down 300px

        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        }

        if (currentScroll > foldHeight) {
            if (currentScroll > lastScroll) {
                // Scrolling down -> hide header
                header.classList.add('hide-header');
                header.classList.remove('sticky-visible');
            } else {
                // Scrolling up -> show sticky header
                header.classList.remove('hide-header');
                header.classList.add('sticky-visible');
            }
        } else {
            // At top -> show normal header
            header.classList.remove('hide-header');
            header.classList.remove('sticky-visible');
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });

    // ===== ACTIVE NAV LINK ON SCROLL ===== //
    window.addEventListener('scroll', function () {
        let current = '';

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ===== MOBILE MENU TOGGLE ===== //
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const mobileNavLinks = document.querySelectorAll('.nav-menu .nav-link, .nav-menu .nav-cta');
        mobileNavLinks.forEach((link) => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInside = navMenu.contains(event.target) || mobileMenuToggle.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    }

    // ===== PARALLAX EFFECT ===== //
    const parallaxElements = document.querySelectorAll('.hero-image');
    window.addEventListener('scroll', function () {
        parallaxElements.forEach((element) => {
            const scrollPosition = window.pageYOffset;
            element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });
    });

    // ===== FORM VALIDATION ===== //
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput) {
        emailInput.addEventListener('invalid', function (e) {
            e.preventDefault();
            this.setCustomValidity('Please enter a valid email address');
        });

        emailInput.addEventListener('input', function () {
            this.setCustomValidity('');
        });
    }

    // ===== LAZY LOAD IMAGES ===== //
    const images = document.querySelectorAll('img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease';

                    // Simulate image loading
                    setTimeout(() => {
                        img.style.opacity = '1';
                    }, 100);

                    observer.unobserve(img);
                }
            });
        });

        images.forEach((img) => imageObserver.observe(img));
    }

    // ===== APPLICATIONS CAROUSEL ===== //
    const appCarousel = document.getElementById('appCarousel');
    const appPrevBtn = document.getElementById('appPrevBtn');
    const appNextBtn = document.getElementById('appNextBtn');

    if (appCarousel && appPrevBtn && appNextBtn) {
        const cardWidth = 320; // App card width + gap
        const scrollAmount = cardWidth;

        appPrevBtn.addEventListener('click', function () {
            appCarousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        appNextBtn.addEventListener('click', function () {
            appCarousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Optional: Update button states based on scroll position
        const updateButtonStates = () => {
            appPrevBtn.disabled = appCarousel.scrollLeft === 0;
            appNextBtn.disabled =
                appCarousel.scrollLeft >= appCarousel.scrollWidth - appCarousel.clientWidth - 10;

            appPrevBtn.style.opacity = appPrevBtn.disabled ? '0.5' : '1';
            appNextBtn.style.opacity = appNextBtn.disabled ? '0.5' : '1';
            appPrevBtn.style.cursor = appPrevBtn.disabled ? 'not-allowed' : 'pointer';
            appNextBtn.style.cursor = appNextBtn.disabled ? 'not-allowed' : 'pointer';
        };

        appCarousel.addEventListener('scroll', updateButtonStates);
        updateButtonStates(); // Initialize button states
    }

    // ===== MANUFACTURING PROCESS TABS ===== //
    const processTabs = document.querySelectorAll('.process-tab');
    const processContentItems = document.querySelectorAll('.process-content-item');

    processTabs.forEach((tab) => {
        tab.addEventListener('click', function () {
            const tabIndex = this.getAttribute('data-tab');

            // Remove active class from all tabs
            processTabs.forEach((t) => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            // Hide all content items
            processContentItems.forEach((item) => item.classList.remove('active'));
            // Show selected content item
            const selectedContent = document.querySelector(
                `.process-content-item[data-content="${tabIndex}"]`
            );
            if (selectedContent) {
                selectedContent.classList.add('active');
            }
        });
    });
});
