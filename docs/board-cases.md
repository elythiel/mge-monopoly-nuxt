# Documentation des listes de cartes

documentation : https://content.nuxtjs.org/guide/writing/mdc

les cases du plateau sont limitées à 36 et ordonnées par leur nom de fichier

Pour désactiver une case, mettez un `.` au début du nom de fichier `ex. .ignore.md` 


## Propriétés utilisables

Vous pouvez utiliser les propriétés suivantes dans chaque fichier

```yaml
---
color: <string> ["red", "yellow", "green", "lightblue", "blue", "darkblue", "brown", "pink", "orange"]
title: <string>
period: <string> période ou durée de la case du plateau
image.name: <string> nom du fichier d'image (doit exister dans /public/images, eg. "ico-guitar.svg")
image.alt: <string> texte alternatif
image.size": <string> ["lg", "xl"] taille de l'image
card: <bool> affichage de la carte au clic, defaut à false
location: <string> lieu (dans la carte)
footer: <string> footer de la carte (prend par défaut la valeur de period)
duration: <string> durée dans la carte
---
```

La suite du fichier contient le contenu de la carte en markdown

```markdown
### Titre de la carte

[Ce texte aura les classes ci-après]{.block.text-center}

::skills
Liste, des, expertises
::
```
