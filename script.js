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
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón de Help
    const helpButton = document.querySelector('.help-button');
    const helpSection = document.getElementById('help-section');
    const closeHelpButton = document.getElementById('close-help');
    const searchContainer = document.querySelector('.search-container');
  
    // Al pulsar el botón de Help
    if (helpButton) {
      helpButton.addEventListener('click', (e) => {
        e.preventDefault(); // Evita navegación a help.html u otra acción por defecto
  
        // Oculta el contenido que no sean los botones
        if (searchContainer) {
           searchContainer.style.display = 'none';
        }
        // Si tienes otros elementos (por ejemplo, algún contenido principal), también puedes ocultarlos aquí.
        // Por ejemplo: document.querySelector('.main-content').style.display = 'none';
  
        // Muestra la sección de ayuda
        helpSection.style.display = 'block';
      });
    }
  
    // Al pulsar "Volver" en la sección de ayuda
    if (closeHelpButton) {
      closeHelpButton.addEventListener('click', () => {
        // Oculta la sección de ayuda
        helpSection.style.display = 'none';
  
        // Vuelve a mostrar el contenido oculto (en este ejemplo, el contenedor de búsqueda)
        if (searchContainer) {
           searchContainer.style.display = 'block';
        }
        // Si ocultaste otros elementos, asegúrate de restaurarlos aquí.
      });
    }
  });
  
