function navbarscript() {
    fetch("NavBar.html")
        .then(navbarhtml => {
            if (!navbarhtml.ok) {
                throw new Error("Network Response was not ok")
            }
            return navbarhtml.text()
        })
        .then(text => {
            document.getElementById('navbar-main').innerHTML = text
        })
        .catch(Error => {
            console.error("An error has occured", Error)
        })
}
window.onload = navbarscript()