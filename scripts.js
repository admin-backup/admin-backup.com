
document.addEventListener('DOMContentLoaded', (event) => {
    // Function to animate elements on scroll, if needed
    window.addEventListener('scroll', revealOnScroll);

    function revealOnScroll() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    // Form validation for the signup form
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        if (validateEmail(email)) {
            form.submit();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Countdown timer for the launch date
    const countdownContainer = document.getElementById('countdown-timer');
    // Set the launch date and time (example date used here, adjust as necessary)
    const launchDate = new Date('2024-07-01T00:00:00Z').getTime();

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in the countdownContainer
        countdownContainer.innerHTML = `Launch in ${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, write some text
        if (distance < 0) {
            clearInterval(interval);
            countdownContainer.innerHTML = "Admin Backup is now live!";
        }
    }, 1000);
});
