// Grafana Community Day Mumbai 2025 - JavaScript
// Extracted from inline scripts on index.html

// Set document class to js
document.documentElement.className = 'js';

// Web Font Loader Configuration
if (typeof WebFontConfig === "undefined") {
    WebFontConfig = new Object();
}
WebFontConfig['google'] = { families: ['Open+Sans:400', 'Oswald:300,400'] };

(function () {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.3/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

// jQuery Configuration
let jqueryParams = [], jQuery = function (r) { 
    return jqueryParams = [...jqueryParams, r], jQuery 
}, $ = function (r) { 
    return jqueryParams = [...jqueryParams, r], $ 
}; 

window.jQuery = jQuery;
window.$ = jQuery;
let customHeadScripts = !1;

jQuery.fn = jQuery.prototype = {};
$.fn = jQuery.prototype = {};

jQuery.noConflict = function (r) { 
    if (window.jQuery) return jQuery = window.jQuery, $ = window.jQuery, customHeadScripts = !0, jQuery.noConflict 
};

jQuery.ready = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

$.ready = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

jQuery.load = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

$.load = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

jQuery.fn.ready = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

$.fn.ready = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

// jQuery after load
document.addEventListener('DOMContentLoaded', function() {
    if (jqueryParams.length) {
        jqueryParams.forEach(function(e, r) {
            if ("function" == typeof e) {
                var n = String(e);
                n.replace("$", "jQuery");
                var a = new Function("return " + n)();
                $(document).ready(a);
            }
        });
    }
});

// Google Analytics Configuration
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("set","linker",{"domains":["acd.awsugmum.in"]});
gtag("js", new Date());
gtag("set", "developer_id.dZTNiMT", true);
gtag("config", "GT-P3MHJGP");

// OneSignal Configuration
window.OneSignal = window.OneSignal || [];
var OneSignal = window.OneSignal;
var oneSignal_options = {};
oneSignal_options['serviceWorkerPath'] = 'OneSignalSDKWorker.js.php';
oneSignal_options['wordpress'] = true;
oneSignal_options['appId'] = 'f48fd485-2c46-4667-bdf4-8d455dd33693';
oneSignal_options['allowLocalhostAsSecureOrigin'] = true;
oneSignal_options['welcomeNotification'] = { };
oneSignal_options['welcomeNotification']['disable'] = true;
oneSignal_options['path'] = "https://acd.awsugmum.in/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/";
oneSignal_options['safari_web_id'] = "web.onesignal.auto.0e007fdd-4c29-4efe-85fd-d9ae8478b7ea";
oneSignal_options['promptOptions'] = { };
oneSignal_options['promptOptions']['actionMessage'] = "Stay notified on important event details!";
oneSignal_options['promptOptions']['acceptButtonText'] = "ALLOW";
oneSignal_options['promptOptions']['cancelButtonText'] = "NO THANKS";

OneSignal.push(function() {
    OneSignal.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js.php";
    OneSignal.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js.php";
    OneSignal.SERVICE_WORKER_PARAM = { scope: "/" };
    OneSignal.setDefaultIcon("https://acd.awsugmum.in/wp-content/uploads/2023/12/cropped-awsugmum-logo.f2d190cc-192x192.jpeg");
    OneSignal.setDefaultTitle("Grafana User Group Mumbai");
    OneSignal.init(window.oneSignal_options);
});

// OTP Timer Script Configuration
var moOtpTimerScript = {
    "siteURL":"https:\/\/acd.awsugmum.in\/wp-admin\/admin-ajax.php",
    "action":"mo_control_otp_block",
    "otpControlTimerTime":"60",
    "otpControlBlockTime":"0",
    "isUserBlocked":null,
    "limit_otp_sent_message":"Your OTP has been sent. The next OTP can be sent after {minutes}:{seconds} minutes",
    "user_blocked_message":"You have exceeded the limit to send OTP. Please wait for {minutes}:{seconds} minutes",
    "error_otp_verify_message":"The next OTP can be sent after {minutes}:{seconds} minutes"
};

// WooCommerce Configuration
var wf_pklist_params_public = {
    "show_document_preview":"No",
    "document_access_type":"logged_in",
    "is_user_logged_in":"",
    "msgs":{
        "invoice_number_prompt_free_order":"\u2018Generate invoice for free orders\u2019 is disabled in Invoice settings > Advanced. You are attempting to generate invoice for this free order. Proceed?",
        "creditnote_number_prompt":"Refund in this order seems not having credit number yet. Do you want to manually generate one ?",
        "invoice_number_prompt_no_from_addr":"Please fill the `from address` in the plugin's general settings.",
        "invoice_title_prompt":"Invoice",
        "invoice_number_prompt":"number has not been generated yet. Do you want to manually generate one ?",
        "pop_dont_show_again":false,
        "request_error":"Request error.",
        "error_loading_data":"Error loading data.",
        "min_value_error":"minimum value should be",
        "generating_document_text":"Generating document...",
        "new_tab_open_error":"Failed to open new tab. Please check your browser settings."
    }
};

var wc_add_to_cart_params = {
    "ajax_url":"\/wp-admin\/admin-ajax.php",
    "wc_ajax_url":"\/?wc-ajax=%%endpoint%%",
    "i18n_view_cart":"View cart",
    "cart_url":"https:\/\/acd.awsugmum.in\/cart\/",
    "is_cart":"",
    "cart_redirect_after_add":"yes"
};

var woocommerce_params = {
    "ajax_url":"\/wp-admin\/admin-ajax.php",
    "wc_ajax_url":"\/?wc-ajax=%%endpoint%%",
    "i18n_password_show":"Show password",
    "i18n_password_hide":"Hide password"
};

// Countdown Timer Functionality
function initCountdown() {
    // Set the date for Grafana Community Mumbai 2025 (November 15, 2025)
    const eventDate = new Date("November 15, 2025 09:00:00").getTime();
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update the countdown display
        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");
        
        if (daysElement) daysElement.innerHTML = String(days).padStart(2, '0');
        if (hoursElement) hoursElement.innerHTML = String(hours).padStart(2, '0');
        if (minutesElement) minutesElement.innerHTML = String(minutes).padStart(2, '0');
        if (secondsElement) secondsElement.innerHTML = String(seconds).padStart(2, '0');
        
        // If the countdown is finished, display event message
        if (distance < 0) {
            clearInterval(timer);
            if (daysElement) daysElement.innerHTML = "00";
            if (hoursElement) hoursElement.innerHTML = "00";
            if (minutesElement) minutesElement.innerHTML = "00";
            if (secondsElement) secondsElement.innerHTML = "00";
        }
    }, 1000);
}

// Initialize countdown when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLoading();
    initCountdown();
    initAnimations();
    initScrollAnimations();
    initParallaxEffects();
    initMagneticEffects();
    initParticleSystem();
});

// Loading animation
function initLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    // Simulate loading time
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
        
        // Start page animations after loading
        setTimeout(() => {
            document.body.classList.add('loaded');
            // Trigger entrance animations
            triggerEntranceAnimations();
        }, 800);
    }, 3000);
}

// Trigger entrance animations for main elements
function triggerEntranceAnimations() {
    const hero = document.querySelector('.hero-section');
    const nav = document.querySelector('.nav-content');
    
    if (hero) {
        hero.style.animation = 'slideInUp 1s ease-out forwards';
    }
    
    if (nav) {
        nav.style.animation = 'slideInDown 0.8s ease-out forwards';
    }
}

// Particle system
function initParticleSystem() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // Random size
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 15000);
    }

    // Create initial particles
    for (let i = 0; i < 30; i++) {
        setTimeout(createParticle, i * 300);
    }

    // Continuously create particles
    setInterval(createParticle, 800);
}

// Magnetic effects for interactive elements
function initMagneticEffects() {
    const magneticElements = document.querySelectorAll('.nav-menu a, button, .member-card, .highlight-item');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) * 0.15;
            const deltaY = (y - centerY) * 0.15;
            
            element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
        });
        
        element.addEventListener('mouseleave', function() {
            element.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
}

// Enhanced countdown with animations
function initCountdown() {
    const eventDate = new Date("November 15, 2025 09:00:00").getTime();
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Animate number changes
        animateCounterUpdate('days', days);
        animateCounterUpdate('hours', hours);
        animateCounterUpdate('minutes', minutes);
        animateCounterUpdate('seconds', seconds);
        
        if (distance < 0) {
            clearInterval(timer);
            document.querySelectorAll('.countdown-number').forEach(el => {
                el.innerHTML = "00";
                el.style.animation = "pulse 1s ease-in-out infinite";
            });
        }
    }, 1000);
}

function animateCounterUpdate(id, value) {
    const element = document.getElementById(id);
    if (element) {
        const currentValue = element.innerHTML;
        const newValue = String(value).padStart(2, '0');
        
        if (currentValue !== newValue) {
            element.style.transform = 'scale(1.2) rotateY(180deg)';
            element.style.color = '#ff671d';
            
            setTimeout(() => {
                element.innerHTML = newValue;
                element.style.transform = 'scale(1) rotateY(0deg)';
                element.style.color = '';
            }, 150);
        }
    }
}

// Initialize scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.8s ease-out forwards';
                entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.highlight-item, .member-card, .event-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.dataset.animation = 'fadeInUp 0.8s ease-out forwards';
        el.dataset.delay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Initialize general animations
function initAnimations() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.highlight-item, .member-card, .event-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(255, 103, 29, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Add click ripple effect
    document.querySelectorAll('button, .nav-menu a, .event-button').forEach(element => {
        element.addEventListener('click', createRipple);
    });
}

// Parallax effects
function initParallaxEffects() {
    // Parallax effects can be added here for other elements if needed
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        // Add parallax effects for other elements here if needed
    });
}

// Create ripple effect
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Mobile menu toggle functionality
function toggleMobileMenu() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    let navMenu = document.getElementById('navMenu');
    // Fallback: try the next sibling UL of the toggle button
    if (!navMenu && toggleButton) {
        const sib = toggleButton.nextElementSibling;
        if (sib && sib.classList && sib.classList.contains('nav-menu')) {
            navMenu = sib;
        }
    }

    if (!navMenu) return; // nothing to toggle

    navMenu.classList.toggle('active');

    // Update icon and aria state
    if (toggleButton) {
        const isOpen = navMenu.classList.contains('active');
        toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        const icon = toggleButton.querySelector('i');
        if (icon) {
            icon.className = isOpen ? 'fa-solid fa-xmark' : 'fas fa-bars';
        }
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    // Ensure toggle works even without inline onclick
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const navMenuEl = document.getElementById('navMenu');
    // Only add listener if there is no inline onclick to avoid double toggling
    if (toggleBtn && navMenuEl && !toggleBtn.getAttribute('onclick')) {
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });
    }

    const navLinks = document.querySelectorAll('.nav-menu a');
    const navMenu = document.getElementById('navMenu');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (toggleButton) {
                const icon = toggleButton.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (toggleButton) {
                const icon = toggleButton.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        }
    });
});

// Event Gallery Carousel Functionality
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.getElementById('carouselPrev');
    const nextButton = document.getElementById('carouselNext');
    
    if (!track || slides.length === 0) return;
    
    let currentSlide = 0;
    let isTransitioning = false;
    let autoplayInterval;
    
    function updateCarousel(slideIndex, animate = true) {
        if (isTransitioning) return;
        
        isTransitioning = true;
        
        // Update active slide
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === slideIndex);
        });
        
        // Update active indicator
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === slideIndex);
        });
        
        // Move track
        const translateX = -slideIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        currentSlide = slideIndex;
        
        setTimeout(() => {
            isTransitioning = false;
        }, animate ? 500 : 0);
    }
    
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        updateCarousel(nextIndex);
    }
    
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel(prevIndex);
    }
    
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 4000);
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Event listeners
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            stopAutoplay();
            nextSlide();
            setTimeout(startAutoplay, 2000);
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            stopAutoplay();
            prevSlide();
            setTimeout(startAutoplay, 2000);
        });
    }
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoplay();
            updateCarousel(index);
            setTimeout(startAutoplay, 2000);
        });
    });
    
    // Pause autoplay on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoplay);
        carouselContainer.addEventListener('mouseleave', startAutoplay);
    }
    
    // Touch/swipe support for mobile
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        stopAutoplay();
    });
    
    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
    });
    
    track.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        setTimeout(startAutoplay, 2000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (document.querySelector('.carousel-container:hover')) {
            if (e.key === 'ArrowLeft') {
                stopAutoplay();
                prevSlide();
                setTimeout(startAutoplay, 2000);
            } else if (e.key === 'ArrowRight') {
                stopAutoplay();
                nextSlide();
                setTimeout(startAutoplay, 2000);
            }
        }
    });
    
    // Initialize
    updateCarousel(0, false);
    startAutoplay();
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // ... existing initialization code ...
    initCarousel();
});