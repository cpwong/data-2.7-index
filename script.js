// Tab Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeCollapsibles();
    addScrollAnimations();
});

// Tab Switching
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Scroll to top of content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Collapsible Sections
function initializeCollapsibles() {
    const collapsibleButtons = document.querySelectorAll('.collapsible-btn');
    
    collapsibleButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            
            const content = this.nextElementSibling;
            content.classList.toggle('active');
            
            // Add smooth transition effect
            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
}

// Add scroll animations for cards
function addScrollAnimations() {
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Add code copy functionality for code blocks
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach((block) => {
        const pre = block.parentElement;
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.className = 'copy-code-btn';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 6px 12px;
            background: var(--accent-primary);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85rem;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 10;
        `;
        
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(copyButton);
        
        wrapper.addEventListener('mouseenter', () => {
            copyButton.style.opacity = '1';
        });
        
        wrapper.addEventListener('mouseleave', () => {
            copyButton.style.opacity = '0';
        });
        
        copyButton.addEventListener('click', async () => {
            const code = block.textContent;
            
            try {
                await navigator.clipboard.writeText(code);
                copyButton.textContent = 'Copied!';
                copyButton.style.background = 'var(--accent-success)';
                
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    copyButton.style.background = 'var(--accent-primary)';
                }, 2000);
            } catch (err) {
                copyButton.textContent = 'Failed';
                copyButton.style.background = 'var(--accent-warning)';
                
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    copyButton.style.background = 'var(--accent-primary)';
                }, 2000);
            }
        });
    });
});

// Add subtle parallax effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.pageYOffset;
    
    if (header && scrollPosition < 300) {
        header.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        header.style.opacity = `${1 - (scrollPosition / 500)}`;
    }
});

// Add interactive hints
document.addEventListener('DOMContentLoaded', function() {
    const hintBoxes = document.querySelectorAll('.hint-box');
    
    hintBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Add smooth scroll for internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Interactive tag highlighting
document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag, .source-tag');
    
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Add pulse animation
            this.style.animation = 'pulse 0.5s';
            
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    .copy-code-btn:hover {
        background: var(--accent-secondary) !important;
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);

// Add keyboard navigation for tabs
document.addEventListener('keydown', function(e) {
    const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
    const activeTab = document.querySelector('.tab-btn.active');
    const currentIndex = tabButtons.indexOf(activeTab);
    
    if (e.key === 'ArrowRight' && currentIndex < tabButtons.length - 1) {
        tabButtons[currentIndex + 1].click();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        tabButtons[currentIndex - 1].click();
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('button, a, .collapsible-btn');
    
    interactiveElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--accent-primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// Progress indicator for long pages
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// Add expand all / collapse all functionality for collapsibles
document.addEventListener('DOMContentLoaded', function() {
    // This function can be called to expand or collapse all sections in a card
    window.toggleAllCollapsibles = function(expand = true) {
        const collapsibleButtons = document.querySelectorAll('.collapsible-btn');
        const collapsibleContents = document.querySelectorAll('.collapsible-content');
        
        collapsibleButtons.forEach((button, index) => {
            const content = collapsibleContents[index];
            
            if (expand) {
                button.classList.add('active');
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                button.classList.remove('active');
                content.classList.remove('active');
                content.style.maxHeight = '0';
            }
        });
    };
});

// Console message for developers
console.log('%c🔍 Data Testing Guide', 'font-size: 20px; font-weight: bold; color: #7b68ee;');
console.log('%cExplore Great Expectations & DBT Testing!', 'font-size: 14px; color: #5a6c7d;');
console.log('%cTip: Use arrow keys to navigate between tabs!', 'font-size: 12px; color: #5fcc8f;');
