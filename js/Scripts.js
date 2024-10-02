function fetchAndInsertHTML(url, elementId) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
            console.error(`An error has occurred while fetching ${url}:`, error);
            throw error;
        });
}

function generateContent() {
    Promise.all([
        fetchAndInsertHTML("NavBar.html", "navbar-main"),
        fetchAndInsertHTML("Header.html", "header-main"),
        fetchAndInsertHTML("Footer.html", "footer-main")
    ]).then(() => {
        console.log("All content loaded successfully");
    }).catch(error => {
        console.error("An error occurred while loading content:", error);
    });
}

function loadFavicon(url) {
    var link = document.getElementById('favicon');
    if (link) {
        link.href = url;
    } else {
        link = document.createElement('link');
        link.id = 'favicon';
        link.rel = 'icon';
        link.href = url;
        link.type = 'image/x-icon';
        document.head.appendChild(link);
    }
}

// Call the functions on page load
window.onload = function() {
    loadFavicon('images/favicon.ico');
    generateContent();
};