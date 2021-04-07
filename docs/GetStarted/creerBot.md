---
title: Créer/Choisir un bot
---

Vous venez de lancer le client "unlabeled" sauf qu'il vous indique que vous n'avez pas de token ! Que faire ??

Pas de panique les étapes sont assez rapides!

### 1. Créer une application discord

Afin de créer une application discord qui ensuite deviendra un bot rendez vous sur discord <https://discord.com/developers/applications/>.

Une fois sur cette page et que vous vous êtes authentifié avec un compte discord vous avez deux choix:

- Vous avez déjà une application et souhaitez l'utiliser avec notre client ? Si oui vous pouvez directement passer a l'étape 2 apres avoir cliqué sur l'application que vous aurez choisi.
- Vous n'avez pas d'application? Alors continuez de lire 😄

#### Vous êtes toujours là ? Si oui, vous souhaitez créer une application discord !

![newApp](/img/newApp.png)
En haut à droite de votre page se trouve un bouton "New Application", cliquez dessus.

Il vous sera demandé d'entrer un nom. Attention celui-ci sera le nom de votre bot.

Une fois fait vous serez redirigé sur une page vous permettant de changer l'image de votre application/bot ainsi que son nom et sa description.

### 2. Créer un bot dans discord et récupérer son token

Vous apercevrez dans le menu de gauche un onglet "Bot", veuillez vous y rendre.

![BuildABot](/img/buildABot.png)

Il est temps futur docteur Frankenstein ! Donnez la vie à votre oeuvre ! Votre premier bot discord !

Vous trouverez un bouton "Add Bot" qui liera un bot à votre application discord.

![IlEstVivant](/img/itsALIVE.png)

N'est il pas beau ce premier bot ? Ici vous aurez la possibilité de changer le nom de votre bot ainsi que son image. Mais le plus important reste à venir. Il est temps de cliquer sur copy, ce qui vous donnera accès à toute la magie de discord. Le TOKEN cette clef illisible est l'identité de votre bot, ne le partager surtout pas ! (sauf avec le client bien sur).

### 3. Créer le bot dans le client

Impatient ? Il est temps de retourner dans le client et de cliqué en haut a droite sur "No Bot Ready"

Une fois fais vous obtiendrez un bouton Add Token, apres avoir cliquer dessus il vous sera demandé d'entrer un label pour votre bot(celui ci vous permettras de le reconnaître à l'avenir) ainsi que le fameux TOKEN.

Cliquer sur Send et votre bot sera sauvegardé

![saveBot](/img/saveBot.png)

:::info

Vous venez de créer un bot dans votre client, afin de l'utiliser vous n'avez qu'à cliquer sur le bouton "play" celui situé sous le label que vous avez attribué lors de la création du bot dans le client. Le bouton play est celui du milieu.

Une fois fais vous avez connecté votre bot à discord, GG.

Cette action est à effectuer à chaque Démarrage du client.

:::

Pourquoi avoir choisi ce processus de création/utilisation du bot :

- Premièrement il n'est pas possible de créer un bot à partir de l'api discord (du moins pas avec la partie public de l'api)
- J'ai choisi un processus où l'utilisateur a accès aux information afin de le sensibiliser.
- Tout spam ou action contrevenant aux règles de discord lui sera imputés, le bot/l'application lui appartient.
- Je n'ai pas développé UnlabeledProject afin qu'un utilisateur contrevienne aux règle de discord.
