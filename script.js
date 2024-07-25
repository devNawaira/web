document.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector('.icon');
    const navLinks = document.querySelector('.nav-links');

    icon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});