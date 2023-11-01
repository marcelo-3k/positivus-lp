const hamburgerEl = document.querySelector('.navigation .hamburger')
const navlinksEl = document.querySelector('.navigation .navlinks')

hamburgerEl.addEventListener('click', () => {
  hamburgerEl.classList.toggle('active')
  navlinksEl.classList.toggle('active')
})