
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.list');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active'); 
    });

    // اختياري: إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        }
    });
});