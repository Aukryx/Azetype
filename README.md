# AzerType

AzerType est une application web interactive conçue pour aider les utilisateurs à améliorer leur vitesse de frappe au clavier. Ce projet est basé sur le cours JavaScript d'OpenClassrooms, avec des fonctionnalités supplémentaires pour enrichir l'expérience utilisateur.

## Fonctionnalités

### Fonctionnalités de Base
- **Mode d'entraînement double** :
  - Mode "Mots" : Pratique avec des mots individuels
  - Mode "Phrases" : Pratique avec des phrases complètes
- **Système de score** : Suivi en temps réel des bonnes réponses
- **Validation intelligente** : Validation par bouton ou touche Entrée

### Fonctionnalités Ajoutées
- **Chronomètre intégré** :
  - Démarrage automatique à la première frappe
  - Affichage précis (minutes:secondes:millisecondes)
  - Bouton de réinitialisation
- **Système de partage de score** :
  - Formulaire de partage personnalisé
  - Options multiples de partage :
    - Client de messagerie par défaut
    - Gmail
    - Copie du texte dans le presse-papiers
  - Inclusion d'images dans le message (GIF de célébration et logo)
- **Validation des formulaires** :
  - Vérification du nom (minimum 2 caractères)
  - Validation du format email
  - Gestion des erreurs avec messages explicites

## Installation et Configuration

1. Cloner le repository
2. Assurez-vous d'avoir Go installé sur votre machine
3. Lancez le serveur :
```bash
go run server.go
```
4. Accédez à l'application via `http://localhost:8080`

## Structure du Projet

```
├── static/
│   ├── css/
│   │   └── style.css
│   └── scripts/
│       ├── config.js
│       ├── popup.js
│       ├── script.js
│       └── main.js
├── templates/
│   ├── index.html
│   └── error404.html
└── server.go
```

## Utilisation

1. Choisissez votre mode d'entraînement (Mots ou Phrases)
2. Commencez à taper dans le champ de saisie
   - Le chronomètre démarre automatiquement à la première frappe
   - Le mode ne peut plus être changé une fois le chronomètre démarré
3. Validez votre saisie avec la touche Entrée ou le bouton "Valider"
4. Une fois l'exercice terminé :
   - Le chronomètre s'arrête
   - Le bouton de partage devient actif
5. Pour partager votre score :
   - Cliquez sur "Partager"
   - Remplissez le formulaire avec votre nom et l'email du destinataire
   - Choisissez votre méthode de partage préférée

## Personnalisation

Le fichier `config.js` contient les listes de mots et de phrases. Vous pouvez les modifier pour adapter l'exercice à vos besoins :
- `listeMots` : Collection de mots pour le mode "Mots"
- `listePhrases` : Collection de phrases pour le mode "Phrases"

## Technologies Utilisées

- HTML5
- CSS3
- JavaScript (Vanilla)
- Go (pour le serveur)

## Améliorations possibles

- Ajout de niveaux de difficulté
- Statistiques détaillées (WPM, précision)
- Mode multijoueur
- Sauvegarde des scores
- Plus de modes d'entraînement

## Licence

Ce projet est basé sur le cours OpenClassrooms avec des améliorations personnelles.