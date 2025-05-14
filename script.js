// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const stickyCta = document.getElementById('sticky-cta');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle Mobile Menu
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a menu item
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        // If it's the "Get Started" button in hero section, scroll to "how-it-works"
        if (this.classList.contains('btn-primary') &&
            this.closest('.hero-content') &&
            targetId === '#contact') {
            const howItWorksSection = document.getElementById('how-it-works');
            if (howItWorksSection) {
                window.scrollTo({
                    top: howItWorksSection.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Show/hide sticky CTA button based on scroll position
window.addEventListener('scroll', () => {
    if (stickyCta) {
        if (window.scrollY > 500) {
            stickyCta.classList.add('show');
        } else {
            stickyCta.classList.remove('show');
        }
    }
});

// Form submission handler
const contactForm = document.getElementById('quoteForm');
if (contactForm) {
    // Remove default email value if present
    const emailInput = contactForm.querySelector('#email');
    if (emailInput && emailInput.value === 'Adsdrop.in@gmail.com') {
        emailInput.value = '';
        emailInput.removeAttribute('readonly');
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // In a real application, you would send this data to a server
        console.log('Form submitted with data:', formDataObject);

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.classList.add('form-success');
        successMessage.textContent = 'Thank you for your interest! We will contact you soon.';
        successMessage.style.color = '#8B5CF6';
        successMessage.style.padding = '1rem';
        successMessage.style.marginTop = '1rem';
        successMessage.style.borderLeft = '3px solid #8B5CF6';
        successMessage.style.backgroundColor = '#E5DEFF';

        contactForm.append(successMessage);

        // Reset form
        contactForm.reset();

        // Remove success message after some time
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Contact page form
const contactPageForm = document.getElementById('contactPageForm');
if (contactPageForm) {
    contactPageForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactPageForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        console.log('Contact form submitted:', formDataObject);

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.classList.add('form-success');
        successMessage.textContent = 'Your message has been sent. We will get back to you soon!';

        contactPageForm.append(successMessage);

        // Reset form
        contactPageForm.reset();

        // Remove success message after some time
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Scroll animations
window.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.process-card, .benefit-card, .target-card, .hero-content, .about-content, .vision-points, .contact-form, .contact-info, .contact-info-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 50) {
                element.classList.add('animate-in');
            }
        });
    };

    // Initial animation for visible elements
    setTimeout(animateOnScroll, 200);

    // Animate on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Add initial styles for animation
    const animationElements = document.querySelectorAll('.process-card, .benefit-card, .target-card, .hero-content, .about-content, .vision-points, .contact-form, .contact-info, .contact-info-card');
    animationElements.forEach(element => {
        element.classList.add('animate-ready');
    });
});

// FAQ Accordion functionality
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        otherAnswer.classList.remove('show');
                    }
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            answer.classList.toggle('show');
        });
    }
});