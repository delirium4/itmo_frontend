document.addEventListener("DOMContentLoaded", () => {
    function setActiveMenu() {
        const menuItems = document.querySelectorAll("nav a");
        const location = window.location;
        menuItems.forEach(item => {
            if (item.href === location.href) item.classList.add("nav_button_active")
        });
    }

    setActiveMenu();
});