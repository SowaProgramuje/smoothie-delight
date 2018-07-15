const hamburgerIcon = document.querySelector('#hamburger');
const header = document.querySelector('#header');

(function toggleHamburger() {
    console.log(hamburgerIcon);
    hamburgerIcon.addEventListener('click', function() {
        this.classList.toggle('hamburger--active');
        header.toggle('header--active');
    })
})();
