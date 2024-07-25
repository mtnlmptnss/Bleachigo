// Wait until the DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the menu toggle button and the menu itself
    const toggleMenuButton = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu');

    // Add a click event listener to the menu toggle button
    toggleMenuButton.addEventListener('click', function() {
        // Toggle the 'visible' class on the menu when the button is clicked
        menu.classList.toggle('visible');
    });
});

// Wait until the DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'style'
    const articles = document.querySelectorAll('.style');

    // Add a click event listener to each article element
    articles.forEach(article => {
        article.addEventListener('click', () => {
            // Get the value of the 'data-link' attribute
            const link = article.getAttribute('data-link');
            if (link) {
                // If the 'data-link' attribute exists, navigate to the URL specified
                window.location.href = link;
            }
        });
    });
});

// Add a click event listener to the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', function() {
    // Toggle the 'dark-theme' class on the body element when the button is clicked
    document.body.classList.toggle('dark-theme');
});

// Add a submit event listener to the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault(); 
    
    // Show the notification element by adding the 'show' class
    const notification = document.getElementById('notification');
    notification.classList.add('show');

    // Hide the notification after 4 seconds
    setTimeout(function() {
        notification.classList.remove('show');
    }, 4000);

    // Optionally clear the form fields
    this.reset();
});