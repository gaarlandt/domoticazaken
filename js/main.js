document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Image Slider functionality
    const initImageSlider = () => {
        // Initialize main image slider
        const mainSlider = document.getElementById('image-slider');
        if (mainSlider) {
            initSingleSlider(mainSlider);
        }

        // Initialize service sliders
        const serviceSliders = document.querySelectorAll('.service-slider');
        serviceSliders.forEach(slider => {
            initSingleSlider(slider);
        });
    };

    const initSingleSlider = (slider) => {
        const sliderOverlay = slider.querySelector('.slider-overlay');
        const sliderLine = slider.querySelector('.slider-line');
        const sliderHandle = slider.querySelector('.slider-handle');
        const voorLabel = slider.querySelector('.absolute.top-2.left-2');
        const naLabel = slider.querySelector('.absolute.top-2.right-2');

        if (!sliderOverlay || !sliderLine || !sliderHandle) return;

        let isDragging = false;
        let sliderPosition = 50; // Start at 50%

        const updateSliderPosition = (percent) => {
            sliderPosition = Math.max(0, Math.min(100, percent));
            sliderOverlay.style.clipPath = `inset(0 ${100 - sliderPosition}% 0 0)`;
            sliderLine.style.left = `${sliderPosition}%`;
            
            // Update label visibility based on slider position
            if (voorLabel && naLabel) {
                if (sliderPosition <= 5) {
                    // Slider all the way left - show only "Na"
                    voorLabel.style.opacity = '0';
                    naLabel.style.opacity = '0.75';
                } else if (sliderPosition >= 95) {
                    // Slider all the way right - show only "Voor"
                    voorLabel.style.opacity = '0.75';
                    naLabel.style.opacity = '0';
                } else {
                    // Slider in middle - show both labels
                    voorLabel.style.opacity = '0.75';
                    naLabel.style.opacity = '0.75';
                }
            }
        };

        const onDrag = (clientX) => {
            if (!isDragging) return;
            
            const rect = slider.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percent = (x / rect.width) * 100;
            
            updateSliderPosition(percent);
        };

        const startDragging = () => {
            isDragging = true;
            document.body.style.userSelect = 'none';
        };

        const stopDragging = () => {
            isDragging = false;
            document.body.style.userSelect = '';
        };

        // Mouse events
        sliderHandle.addEventListener('mousedown', startDragging);
        document.addEventListener('mousemove', (e) => onDrag(e.clientX));
        document.addEventListener('mouseup', stopDragging);

        // Touch events for mobile
        sliderHandle.addEventListener('touchstart', (e) => {
            e.preventDefault();
            startDragging();
        });
        
        document.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches.length > 0) {
                e.preventDefault();
                onDrag(e.touches[0].clientX);
            }
        }, { passive: false });
        
        document.addEventListener('touchend', stopDragging);

        // Click to position slider
        slider.addEventListener('click', (e) => {
            if (e.target === sliderHandle || sliderHandle.contains(e.target)) return;
            
            const rect = slider.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percent = (x / rect.width) * 100;
            updateSliderPosition(percent);
        });
    };

    // FAQ Accordion functionality
    const initFAQ = () => {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon path');
            
            if (!question || !answer || !icon) return;

            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('is-open');
                
                // Close all other FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('is-open')) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-icon path');
                        const otherQuestion = otherItem.querySelector('.faq-question');
                        
                        otherItem.classList.remove('is-open');
                        otherAnswer.style.maxHeight = '0';
                        otherAnswer.classList.remove('mt-4', 'ml-9');
                        otherIcon.setAttribute('d', 'M12 4v16m8-8H4');
                        otherQuestion.setAttribute('aria-expanded', 'false');
                    }
                });
                
                if (isOpen) {
                    // Close this FAQ
                    item.classList.remove('is-open');
                    answer.style.maxHeight = '0';
                    answer.classList.remove('mt-4', 'ml-9');
                    icon.setAttribute('d', 'M12 4v16m8-8H4');
                    question.setAttribute('aria-expanded', 'false');
                } else {
                    // Open this FAQ
                    item.classList.add('is-open');
                    answer.style.maxHeight = '24rem'; // max-h-96
                    answer.classList.add('mt-4', 'ml-9');
                    icon.setAttribute('d', 'M20 12H4');
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        });
    };

    // Testimonial Carousel functionality
    const initTestimonials = () => {
        const container = document.querySelector('.testimonial-container');
        const slider = document.querySelector('.testimonial-slider');
        const prevBtn = document.querySelector('.testimonial-prev');
        const nextBtn = document.querySelector('.testimonial-next');
        const cards = document.querySelectorAll('.testimonial-card');

        if (!container || !slider || !prevBtn || !nextBtn || cards.length === 0) return;

        let currentIndex = 0;
        const totalCards = cards.length;
        const cardsToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        const maxIndex = Math.max(0, totalCards - cardsToShow);

        const updateSliderPosition = () => {
            const cardWidth = cards[0].offsetWidth;
            const gap = 32; // 2rem gap
            const translateX = currentIndex * (cardWidth + gap);
            slider.style.transform = `translateX(-${translateX}px)`;
            
            // Update button states
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
        };

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSliderPosition();
            }
        });

        // Initialize
        updateSliderPosition();

        // Update on resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const newCardsToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
                const newMaxIndex = Math.max(0, totalCards - newCardsToShow);
                if (currentIndex > newMaxIndex) {
                    currentIndex = newMaxIndex;
                }
                updateSliderPosition();
            }, 250);
        });
    };

    // Initialize all components
    initImageSlider();
    initFAQ();
    initTestimonials();
});
