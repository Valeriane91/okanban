Lister dans le fichier, les tables à créer ainsi que les champs qu'elles vont contenir
Ne pas oublier de typer chaque champ de caque table

On a 3 cas possibles pour les cardinalités max
- 1,n : on va placer la clé étrangère sur l'entité qui détient le 1

- 1,1: on va placer la clé étrangère dans la table où ça parait logique

- n,n : on est obligé de rajouter une table pour faire la relation


CARTE (id SERIAL NOT NULL, titre TEXT NOT NULL, couleur TEXT NULL)
titre: clé primaire de la table CARTE
#titre: clé étrangère qui référence titre de la table CARTE

LABEL (id SERIAL NOT NULL, nom TEXT NOT NULL)
nom: clé primaire de la table LABEL
#titre: clé étrangère qui référence titre de la table CARTE

LISTE (id SERIAL NOT NULL, nom TEXT NOT NULL)
nom: clé primaire de la table LISTE

CARTE_possede_LISTE ((#carte(id) INT NOT NULL, #liste(id) INT NOT NULL)
clé primaire: titre + nom
clé étrangère: titre qui référence titre de la table CARTE
clé étrangère: nom qui référence nom de la table LISTE