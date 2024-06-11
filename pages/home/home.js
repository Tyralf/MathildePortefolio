document.addEventListener("DOMContentLoaded", function() {
    loadComponent('../conditions/conditions.html', 'conditions');
    loadComponent('../contact/contact.html', 'contact');
});

function loadComponent(url, elementId) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

