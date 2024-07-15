document.addEventListener("DOMContentLoaded", function() {
    loadComponent('/components/header/header.html', 'header').then(() => {
        attachHeaderEvents();
    });
    loadComponent('/components/footer/footer.html', 'footer');
    // Event listeners pour les liens de navigation
    /*document.getElementById('header').addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const page = e.target.getAttribute('href');
            loadPage(page);
        }
    });*/
});

function loadComponent(url, elementId) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

function attachHeaderEvents() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}