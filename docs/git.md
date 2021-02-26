# Git
## Ajouter une remote supplémentaire

Afin de pouvoir importer du code "externe" à son dépot, on peut connecter notre dépot local à un autre, en plus de la connexion "normale" entre notre dépot local et notre dépot sur Github.

Exemple : 

`git remote add correction git@github.com:O-clock-Quill/S07-oKanban-olivier-oclock.git`


## Pull depuis une remote externe

`git pull --force --allow-unrelated-histories correction master` 
 
 Pour résoudre automatiquement les conflits : 
 `git pull -X theirs --force --allow-unrelated-histories correction master`
 
 Si on veut résoudre les conflits manuellement, dans vs code on a  un fichier écrit en vert et la correction écrit en bleu.

Cliquez dans vs code au dessus de ma partie sur "accepeter la modif entrante", ensuite, git add, git commit et git push.