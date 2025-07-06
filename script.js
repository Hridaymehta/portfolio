document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    // The page uses header links directly instead of a <nav> element
    const links = document.querySelectorAll('header a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle dark mode
    const toggleTheme = document.querySelector('.toggle-theme');
    if (toggleTheme) {
        toggleTheme.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Scroll event for animations
    function handleScroll() {
        const sections = document.querySelectorAll('.animate__fade-in');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    }

    // Expose for testing
    window.handleScroll = handleScroll;

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
});

if (typeof module !== 'undefined') {
    module.exports = { handleScroll };
}
