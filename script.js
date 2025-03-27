const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    snowflake.style.top = Math.random() * window.innerHeight + 'px';
    snowflake.style.left = -10 + 'px';

    const duration = Math.random() * 5 + 3;
    snowflake.style.animationDuration = duration + 's';

    const size = Math.random() * 10 + 5;
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';

    snowflake.style.opacity = Math.random() * 0.5 + 0.3;

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
};

setInterval(createSnowflake, 200);

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
