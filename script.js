document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(
        ".custom-button, .logo-button, .home-button, .help-button, .executors-button, .download-button, .credits-button"
    );

    buttons.forEach((button) => {
        button.classList.add("animate-slide-down");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.home-button, .help-button, .executors-button, .download-button, .credits-button');
    let activeTrail = document.createElement('div');
    activeTrail.classList.add('button-trail');
    document.body.appendChild(activeTrail);

    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const rect = e.target.getBoundingClientRect();
            activeTrail.style.width = `${rect.width}px`;
            activeTrail.style.height = `${rect.height}px`;
            activeTrail.style.top = `${rect.top}px`;
            activeTrail.style.left = `${rect.left}px`;
            activeTrail.style.transform = 'scale(1.5)';
            activeTrail.style.opacity = '0.16';
        });
    });
});
