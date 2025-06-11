document.addEventListener('DOMContentLoaded', function() {
    // Get all links with the scroll-link class
    const scrollLinks = document.querySelectorAll('.scroll-link');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle links that start with #
            if (href.startsWith('#')) {
                e.preventDefault();
                
                // Get the target section from the href
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Close mobile menu if open
                    const navbar = document.getElementById('navbar-default');
                    if (navbar.classList.contains('block')) {
                        navbar.classList.remove('block');
                        navbar.classList.add('hidden');
                    }
                    
                    // Smooth scroll to the section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL without page reload
                    history.pushState(null, null, href);
                }
            }
            // If the link doesn't start with #, let it work normally
        });
    });
}); 