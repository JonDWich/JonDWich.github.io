// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get all expand buttons
    const expandButtons = document.querySelectorAll('.expand-btn');

    // Click event listener for each button
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active class on the button
            this.classList.toggle('active');

            // Get the content container that follows the button
            const content = this.nextElementSibling;

            // Toggle active class
            content.classList.toggle('active');
        });
    });
});

// Contact Form submission handling
const contactForm = document.querySelector('contact-form');
if (contactForm)
{
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Alert thing
        alert(`Thanks, ${name}! I'll get back to you. Test`);

        contactForm.reset();
    })
}