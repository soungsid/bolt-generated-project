export type EcoleConduite = {
    id: string; // Identifiant unique de l'école
    nomEcole: string; // Nom de l'école de conduite
    adresse: string; // Adresse de l'école
    codePostal: string; // Code postal de l'école
    ville: string; // Ville où se situe l'école
    region: string; // Région où se situe l'école
    telephone: string; // Numéro de téléphone de l'école
    email?: string; // Email de contact de l'école (optionnel)
    contact?: string; // Personne ou service de contact (optionnel)
    typeCours: ('Auto' | 'Moto')[]; // Type de l'école (auto, moto, etc.)
};
