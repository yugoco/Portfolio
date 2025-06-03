const navCollapse = document.getElementById('navbarNav');

// Scroll lock en mobile
navCollapse.addEventListener('shown.bs.collapse', () => {
    document.body.classList.add('no-scroll');
});

navCollapse.addEventListener('hidden.bs.collapse', () => {
    document.body.classList.remove('no-scroll');
});

// Réinitialisation sur resize
window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 991;

    if (!isMobile) {
        document.body.classList.remove('no-scroll');

        // Forcer la fermeture du menu mobile si présent
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }
});

document.addEventListener('click', (event) => {
    const isNavbarOpen = navCollapse.classList.contains('show');
    const isClickInsideNavbar = navCollapse.contains(event.target);

    if (isNavbarOpen && !isClickInsideNavbar) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }
});
