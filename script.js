document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces de navegación con el atributo data-section
    const navLinks = document.querySelectorAll('.main-header nav ul li a[data-section]');
    // Selecciona todas las secciones del taller
    const sections = document.querySelectorAll('.workshop-section');
    // Selecciona el botón "Comenzar Taller"
    const startWorkshopBtn = document.getElementById('start-workshop-btn');

    // Función para mostrar una sección específica y actualizar el enlace activo en el menú
    const showSection = (sectionId) => {
        sections.forEach(section => {
            section.classList.remove('active'); // Oculta todas las secciones
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active'); // Muestra la sección deseada

            // Actualizar el enlace activo en el menú
            navLinks.forEach(link => {
                link.classList.remove('active-link'); // Remueve la clase de todos los enlaces
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active-link'); // Añade la clase al enlace de la sección activa
                }
            });

            // Desplazarse suavemente al inicio de la sección activa
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Al cargar la página, muestra la sección 'inicio' por defecto
    showSection('inicio');

    // Manejador de eventos para el botón "Comenzar Taller"
    if (startWorkshopBtn) {
        startWorkshopBtn.addEventListener('click', () => {
            showSection('que-es-android'); // Navega a la sección "¿Qué es Android?"
        });
    }

    // Manejar clics en los enlaces de navegación del header
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace (salto instantáneo)
            const sectionId = event.target.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Manejar clics en los botones "Anterior" y "Siguiente" dentro de las secciones
    const navButtons = document.querySelectorAll('.navigation-buttons .main-button');
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetSectionId = event.target.getAttribute('data-target-section');
            if (targetSectionId) {
                showSection(targetSectionId);
            }
        });
    });
});