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
        const slider = document.getElementById('image-slider');
        if (!slider) return;

        const sliderOverlay = slider.querySelector('.slider-overlay');
        const sliderLine = slider.querySelector('.slider-line');
        const sliderHandle = slider.querySelector('.slider-handle');

        let isDragging = false;
        let sliderPosition = 50; // Start at 50%

        const updateSliderPosition = (percent) => {
            sliderPosition = Math.max(0, Math.min(100, percent));
            sliderOverlay.style.clipPath = `inset(0 ${100 - sliderPosition}% 0 0)`;
            sliderLine.style.left = `${sliderPosition}%`;
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

    // Initialize all components
    initImageSlider();
    initFAQ();
});
