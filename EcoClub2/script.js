// ============================================
// PARTICLE ANIMATION
// ============================================
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(168, 213, 162, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ============================================
// TYPING ANIMATION
// ============================================
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const text = "EcoTech Club - Together for Nature";
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    type();
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// ============================================
// EVENTS TABS
// ============================================
function initEventTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const pastEvents = document.getElementById('pastEvents');
    const upcomingEvents = document.getElementById('upcomingEvents');
    
    if (!tabButtons.length) return;
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const tab = btn.getAttribute('data-tab');
            
            if (pastEvents) pastEvents.classList.add('hidden');
            if (upcomingEvents) upcomingEvents.classList.add('hidden');
            
            if (tab === 'past' && pastEvents) {
                setTimeout(() => pastEvents.classList.remove('hidden'), 150);
            } else if (tab === 'upcoming' && upcomingEvents) {
                setTimeout(() => upcomingEvents.classList.remove('hidden'), 150);
            }
        });
    });
}

// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        const errorElement = field.parentElement.querySelector('.form-error');
        if (!field.value.trim()) {
            errorElement.textContent = 'This field is required';
            field.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            errorElement.textContent = '';
            field.style.borderColor = '';
            
            if (field.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    errorElement.textContent = 'Invalid email';
                    field.style.borderColor = '#e74c3c';
                    isValid = false;
                }
            }
            
            if (field.type === 'tel') {
                const phoneRegex = /^[0-9+\-\s()]+$/;
                if (!phoneRegex.test(field.value)) {
                    errorElement.textContent = 'Invalid phone number';
                    field.style.borderColor = '#e74c3c';
                    isValid = false;
                }
            }
        }
    });
    
    return isValid;
}

function initForm() {
    const form = document.getElementById('joinForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm(form)) return;
        
        const submitBtn = form.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            university: document.getElementById('university').value,
            department: document.getElementById('department').value,
            motivation: document.getElementById('motivation').value,
            timestamp: new Date().toISOString()
        };
        
        const webhookUrl = (window.ECOCLUB_WEBHOOK_URL || window.CLUB_CONFIG?.form?.webhookUrl || '[N8N_WEBHOOK_URL]').trim();
        
        try {
            if (!webhookUrl || webhookUrl === '[N8N_WEBHOOK_URL]') {
                console.log('Form data:', formData);
                await new Promise(resolve => setTimeout(resolve, 1000));
            } else {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                
                if (!response.ok) throw new Error('Form submission failed');
            }
            
            const modal = document.getElementById('successModal');
            if (modal) modal.classList.add('show');
            form.reset();
            
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    });
    
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            const errorElement = input.parentElement.querySelector('.form-error');
            if (input.hasAttribute('required') && !input.value.trim()) {
                errorElement.textContent = 'This field is required';
                input.style.borderColor = '#e74c3c';
            } else {
                errorElement.textContent = '';
                input.style.borderColor = '';
            }
        });
        
        input.addEventListener('input', () => {
            const errorElement = input.parentElement.querySelector('.form-error');
            if (errorElement.textContent && input.value.trim()) {
                errorElement.textContent = '';
                input.style.borderColor = '';
            }
        });
    });
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.classList.remove('show');
}

document.addEventListener('click', (e) => {
    const modal = document.getElementById('successModal');
    if (modal && e.target === modal) closeModal();
});

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero3D = document.getElementById('earth3D');
        if (hero3D) hero3D.style.transform = `translateY(${scrolled * 0.5}px) rotate(${scrolled * 0.1}deg)`;
    });
}

// ============================================
// SECTION INDICATORS — Active state on scroll
// ============================================
function initSectionIndicators() {
    const indicators = document.querySelectorAll('.section-num');
    const sections = document.querySelectorAll('.section[id]');
    if (!indicators.length || !sections.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                indicators.forEach(ind => {
                    const href = ind.getAttribute('href') || '';
                    ind.classList.toggle('active', href === '#' + id);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s));
}

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initCounters();
    initEventTabs();
    initForm();
    initSmoothScroll();
    initParallax();
    initSectionIndicators();
});

window.closeModal = closeModal;
