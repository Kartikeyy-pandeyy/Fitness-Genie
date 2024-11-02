window.addEventListener('scroll', function() {
    var header = document.querySelector('header.navbar');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
