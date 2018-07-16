const hamburgerIcon = document.querySelector('#hamburger');
const mainMenu = document.querySelector('#main-menu');

(function toggleHamburger() {
    if (typeof(hamburgerIcon) != 'undefined' &&  hamburgerIcon != null) {
        hamburgerIcon.addEventListener('click', function() {
            this.classList.toggle('hamburger--active');
            mainMenu.classList.toggle('main-menu--active');
        })
    }
})();
