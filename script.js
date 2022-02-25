document.getElementsByClassName('dropdown-btn')[0].addEventListener('click', function() {
    let navbar = document.getElementsByClassName('navbar')[0];
    navbar.classList.toggle('active-nav');
    navbar.classList.toggle('active-pos');
    document.getElementsByClassName('main-content')[0].classList.toggle('margin-top-rem');
    document.getElementById('menu-items').classList.toggle('active-menu');
    this.classList.toggle('is-active')
});