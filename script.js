// Mobile navigation
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}


// Automatically update copyright year
document.getElementById("year").textContent = new Date().getFullYear();


// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks").classList.remove("active");

    });

});
