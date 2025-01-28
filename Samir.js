// Création d'un tableau avec les informations des collaborateurs
let collaborateurs = [
    {
        nom: 'Samir',
        role: 'Chef',
        competences: ['Gestion de projet', 'Leadership', 'Prise de décision']
    },
    {
        nom: 'Omar',
        role: 'Sous Chef',
        competences: ['Assistance dans la gestion de projet', 'Communication', 'Organisation']
    },
    {
        nom: 'Carole',
        role: 'Scrum Master',
        competences: ['Gestion de projet Agile', 'Facilitation d’équipe', 'Suivi de projet']
    }
];

// Affichage des informations du tableau
collaborateurs.forEach((collaborateur) => {
    console.log(`Nom: ${collaborateur.nom}`);
    console.log(`Rôle: ${collaborateur.role}`);
    console.log(`Compétences: ${collaborateur.competences.join(', ')}`);
    console.log('----------------------------');
});
