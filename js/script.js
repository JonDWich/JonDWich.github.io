// Dark mode prevention script
(function() {
    // Check localStorage for dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        // Add dark mode class immediately
        document.documentElement.classList.add('dark-mode');
        
        // Optional: Prevent initial flash by setting a transition delay
        document.documentElement.style.transition = 'none';
        
        // Remove the no-transition style after initial load
        window.addEventListener('load', function() {
            document.documentElement.style.transition = '';
        });
    }
})();

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find all expand buttons
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    // Add click event listener to each button
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active class on the button
            this.classList.toggle('active');
            
            // Get the content container that follows this button
            const content = this.nextElementSibling;
            
            // Toggle active class on the content
            content.classList.toggle('active');
        });
    });
    
    const toggleButton = document.getElementById('dark-mode-toggle');
    const html = document.documentElement;

    if (localStorage.getItem('dark-mode') == 'enabled') {
        html.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', function() {
        html.classList.toggle('dark-mode');

        if (html.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
    
    // Form submission handling (for contact form)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For now, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
});