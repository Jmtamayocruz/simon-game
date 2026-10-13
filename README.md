# 🎮 Jeu Simon (Simon Game)

Un jeu de mémoire interactif et rétroviseur basé sur le fameux jeu classique **Simon**, développé en JavaScript, jQuery, HTML5 et CSS3.

![Aperçu du Jeu Simon](https://github.com/Jmtamayocruz/simon-game/blob/main/apper%C3%A7u-simon-game.png)

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

## 🛠️ Technologies Utilisées
- **HTML5** : Structure de la page web.

- **CSS3** : Design et animations (Police Google Font Press Start 2P).

- **JavaScript (ES6)** : Logique du jeu et gestion de la mémoire.

- **jQuery (v3.7.1)** : Manipulation simplifiée du DOM, gestion des événements clavier/clic et animations.

---

## 🎮 Comment Jouer ?
**Démarrage** : Appuie sur n'importe quelle touche de ton clavier pour démarrer la partie.

**Mémorisation** : Observe la couleur qui clignote et écoute le son associé.

**Action** : Clique sur le bouton correspondant.

**Progression** : Si la séquence est correcte, tu passes au niveau suivant et une nouvelle couleur s'ajoute.

**Game Over** : Si tu te trompes de bouton, l'écran clignote en rouge et tu peux réappuyer sur une touche pour recommencer du Level 0.

---

## 👤 Auteur & Crédits

- **Développé par** : Joaquin (https://github.com/Jmtamayocruz)

- **Origine du projet** : Réalisé dans le cadre d'un exercice pratique issu du cours de l'App Brewery London, suivi durant la master class The Complete Web Development Bootcamp par Angela Yu sur Udemy.

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
