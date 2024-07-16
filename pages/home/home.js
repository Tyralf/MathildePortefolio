document.addEventListener("DOMContentLoaded", function() {
    loadComponent('/pages/conditions/conditions.html', 'conditions');
    loadComponent('/pages/contact/contact.html', 'contact');
});

function loadComponent(url, elementId) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

