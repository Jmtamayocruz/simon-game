# 🎮 Jeu Simon (Simon Game)

Un jeu de mémoire interactif et rétroviseur basé sur le fameux jeu classique **Simon**, développé en JavaScript, jQuery, HTML5 et CSS3.

![Aperçu du Jeu Simon](https://github.com/Jmtamayocruz/simon-game/blob/main/Capture%20d'%C3%A9cran%202026-10-13%20205700.png)

---

## 📌 Présentation du Projet

Le jeu génère une séquence aléatoire de couleurs accompagnée de sons. Le joueur doit mémoriser cette séquence et la reproduire dans le même ordre. À chaque tour réussi, la séquence s'allonge d'une couleur, augmentant ainsi le niveau de difficulté.

---

## 🚀 Fonctionnalités

- **Séquence dynamique** : Séquence de couleurs générée aléatoirement à chaque nouveau niveau.
- **Retour visuel et sonore** : Effets lumineux (`fadeIn`/`fadeOut`) et effets sonores dédiés pour chaque couleur.
- **Gestion des erreurs (Game Over)** : Flash rouge sur l'écran et son spécifique lors d'une mauvaise combinaison.
- **Redémarrage rapide** : Possibilité de relancer une partie immédiatement après un Game Over.

---

## 📁 Structure du Projet

```text
├── index.html   # Structure HTML du jeu et chargement des scripts/polices
├── styles.css   # Styles CSS (Design rétro, grille des boutons, animations)
├── game.js     # Logique du jeu en JavaScript (jQuery)
└── sounds/      # Dossier contenant les fichiers audio MP3
    ├── red.mp3
    ├── blue.mp3
    ├── green.mp3
    ├── yellow.mp3
    └── wrong.mp3
