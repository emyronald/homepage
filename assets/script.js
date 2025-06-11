const hamburger = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('fa-xmark');
    navMenu.classList.toggle('active');
}
);