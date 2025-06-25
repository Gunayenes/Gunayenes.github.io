// Main Slider Functionality
class MainSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.prev-slide');
        this.nextBtn = document.querySelector('.next-slide');
        this.progressBar = document.querySelector('.progress-bar');
        this.autoSlideInterval = null;
        this.slideInterval = 5000; // 5 seconds

        this.init();
    }

    init() {
        if (this.slides.length === 0) return;

        // Set up event listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());

        // Indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Touch/swipe support
        this.setupTouchEvents();

        // Auto slide
        this.startAutoSlide();

        // Pause auto slide on hover
        const slider = document.querySelector('.main-slider');
        slider?.addEventListener('mouseenter', () => this.stopAutoSlide());
        slider?.addEventListener('mouseleave', () => this.startAutoSlide());

        // Initialize first slide
        this.updateSlide();
    }

    setupTouchEvents() {
        const slider = document.querySelector('.main-slider');
        let startX = 0;
        let endX = 0;

        slider?.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        slider?.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });

        this.handleSwipe = () => {
            const threshold = 50;
            const diff = startX - endX;

            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        };
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlide();
        this.resetAutoSlide();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlide();
        this.resetAutoSlide();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlide();
        this.resetAutoSlide();
    }

    updateSlide() {
        // Update slides
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === this.currentSlide) {
                slide.classList.add('active');
            }
        });

        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === this.currentSlide) {
                indicator.classList.add('active');
            }
        });

        // Update progress bar
        this.updateProgressBar();
    }

    updateProgressBar() {
        if (this.progressBar) {
            this.progressBar.style.width = '0%';
            setTimeout(() => {
                this.progressBar.style.width = '100%';
            }, 50);
        }
    }

    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideInterval);
        this.updateProgressBar();
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    resetAutoSlide() {
        this.startAutoSlide();
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MainSlider();
});

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Dropdown menu toggle
if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', () => {
        dropdownBtn.classList.toggle('active');
        dropdownMenu.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownBtn.classList.remove('active');
            dropdownMenu.classList.remove('active');
        }
    });

    // Close dropdown when clicking on a link
    const dropdownLinks = dropdownMenu.querySelectorAll('.nav-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdownBtn.classList.remove('active');
            dropdownMenu.classList.remove('active');
        });
    });

    // Close dropdown with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dropdownMenu.classList.contains('active')) {
            dropdownBtn.classList.remove('active');
            dropdownMenu.classList.remove('active');
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Close mobile menu when clicking on mobile reservation button
const mobileReservationBtn = document.querySelector('.btn-mobile-reservation');
if (mobileReservationBtn) {
    mobileReservationBtn.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
}

// Quick reservation form
const quickForm = document.querySelector('.quick-form');
if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(quickForm);
        const checkin = formData.get('checkin');
        const checkout = formData.get('checkout');
        const guests = formData.get('guests');
        
        if (!checkin || !checkout || !guests) {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }
        
        // Redirect to detailed reservation with pre-filled data
        const detailedSection = document.querySelector('#detailed-reservation');
        if (detailedSection) {
            detailedSection.scrollIntoView({ behavior: 'smooth' });
            
            // Pre-fill detailed form
            setTimeout(() => {
                const detailedCheckin = document.querySelector('#detailed-reservation #checkin');
                const detailedCheckout = document.querySelector('#detailed-reservation #checkout');
                const detailedGuests = document.querySelector('#detailed-reservation #guests');
                
                if (detailedCheckin) detailedCheckin.value = checkin;
                if (detailedCheckout) detailedCheckout.value = checkout;
                if (detailedGuests) detailedGuests.value = guests;
            }, 500);
        }
    });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (!email) {
            alert('Lütfen e-posta adresinizi girin.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        
        alert('E-bülten kaydınız başarıyla alınmıştır!');
        newsletterForm.reset();
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Reservation button smooth scroll
const reservationBtns = document.querySelectorAll('a[href="#reservation"]');
reservationBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const reservationSection = document.querySelector('#reservation');
        if (reservationSection) {
            const offsetTop = reservationSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form validation and submission
const reservationForm = document.querySelector('.detailed-reservation .reservation-form');
if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(reservationForm);
        const checkinDate = formData.get('checkin');
        const checkoutDate = formData.get('checkout');
        const guests = formData.get('guests');
        const roomType = formData.get('room-type');
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        
        // Basic validation
        if (!checkinDate || !checkoutDate || !guests || !roomType || !name || !email || !phone) {
            alert('Lütfen tüm zorunlu alanları doldurun.');
            return;
        }
        
        // Date validation
        const today = new Date();
        const checkin = new Date(checkinDate);
        const checkout = new Date(checkoutDate);
        
        if (checkin < today) {
            alert('Giriş tarihi bugünden önce olamaz.');
            return;
        }
        
        if (checkout <= checkin) {
            alert('Çıkış tarihi giriş tarihinden sonra olmalıdır.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        
        // Success message (in a real application, this would send data to a server)
        alert(`Rezervasyon talebiniz alınmıştır, ${name}! En kısa sürede size dönüş yapacağız.`);
        
        // Reset form
        reservationForm.reset();
    });
}

// Contact form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }
        
        // Email validation for contact form
        const emailInput = contactForm.querySelector('input[type="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        
        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        contactForm.reset();
    });
}

// Gallery image hover effects
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.03)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

if (galleryItems.length > 0 && lightbox) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const animateElements = document.querySelectorAll('.room-card, .timeline-item, .gallery-item, .contact-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Auto-update current date for checkin field
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');
const quickCheckinInput = document.getElementById('quick-checkin');
const quickCheckoutInput = document.getElementById('quick-checkout');

if (checkinInput && checkoutInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };
    
    checkinInput.min = formatDate(today);
    checkoutInput.min = formatDate(tomorrow);
    
    checkinInput.addEventListener('change', () => {
        const selectedDate = new Date(checkinInput.value);
        const nextDay = new Date(selectedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        checkoutInput.min = formatDate(nextDay);
        
        if (checkoutInput.value && new Date(checkoutInput.value) <= selectedDate) {
            checkoutInput.value = formatDate(nextDay);
        }
    });
}

// Quick form date handling
if (quickCheckinInput && quickCheckoutInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };
    
    quickCheckinInput.min = formatDate(today);
    quickCheckoutInput.min = formatDate(tomorrow);
    
    quickCheckinInput.addEventListener('change', () => {
        const selectedDate = new Date(quickCheckinInput.value);
        const nextDay = new Date(selectedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        quickCheckoutInput.min = formatDate(nextDay);
        
        if (quickCheckoutInput.value && new Date(quickCheckoutInput.value) <= selectedDate) {
            quickCheckoutInput.value = formatDate(nextDay);
        }
    });
}

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Smooth reveal animation for sections
const revealElements = document.querySelectorAll('.welcome, .rooms, .history, .gallery, .location, .contact');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Add CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
    .welcome, .rooms, .history, .gallery, .location, .contact {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .welcome.revealed, .rooms.revealed, .history.revealed, 
    .gallery.revealed, .location.revealed, .contact.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-link.active {
        color: var(--primary-gold);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    body.loaded {
        animation: pageLoad 1s ease-out;
    }
    
    @keyframes pageLoad {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Grand Heritage Hotel website loaded successfully!');
    
    // Add welcome animation delay
    setTimeout(() => {
        const welcomeSection = document.querySelector('.welcome');
        if (welcomeSection) {
            welcomeSection.classList.add('revealed');
        }
    }, 500);
});
