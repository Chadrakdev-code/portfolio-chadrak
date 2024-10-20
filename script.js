// Sélectionne tous les liens du menu de navigation
const navLinks = document.querySelectorAll('nav ul li a');

// Ajoute un écouteur d'événements à chaque lien pour un défilement fluide
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Défilement fluide vers la section ciblée
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sélectionne le formulaire et ses champs
const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

// Ajoute un écouteur d'événements sur le formulaire pour la soumission
form.addEventListener('submit', function(event) {
    // Empêche l'envoi par défaut
    event.preventDefault();
    
    // Vérifie que tous les champs sont remplis
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Veuillez remplir tous les champs.');
    } else if (!validateEmail(emailInput.value)) {
        alert('Veuillez entrer un e-mail valide.');
    } else {
        // Si tout est bon, soumet le formulaire (ici tu peux remplacer par une requête ou un message de confirmation)
        alert('Merci ! Votre message a été envoyé.');
        form.reset(); // Réinitialise le formulaire après envoi
    }
});

// Fonction pour valider une adresse e-mail
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}