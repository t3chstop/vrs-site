document.addEventListener('scroll', (e) => {
  if(window.scrollY > 225) {
    document.querySelector('.site-header').classList.add('scrolled')
  } else {
    document.querySelector('.site-header').classList.remove('scrolled')
  }
})

document.addEventListener("touchstart", function() {}, true);
