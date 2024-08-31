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
            throw error; // Re-throw the error to propagate it to the caller
        });
}

function generateContent() {
    Promise.all([
        fetchAndInsertHTML("NavBar.html", "navbar-main"),
        fetchAndInsertHTML("Header.html", "header-main")
    ]).then(() => {
        console.log("All content loaded successfully");
    }).catch(error => {
        console.error("An error occurred while loading content:", error);
    });
}

window.onload = generateContent;