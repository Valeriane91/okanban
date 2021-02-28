-- -----------------------------------------------------
-- Schema kanban
-- -----------------------------------------------------
-- Par convention on va nommer toutes les tables au singulier, en minuscule et en anglais.
-- Chaque table contiendra un champs created_at contenant la date de création d'un enregistrement
-- Et un champ updated_at contenant la date de mise à jour de cet enregistrement
-- Création d'une transaction, c'est un groupe d' instruction SQL
-- qui rends celles-ci dépéndantes les unes des autres. 
-- Si au moins une des instructions génère une erreur, 
-- alors toutes les commandes sont invalidés
BEGIN;

-- Comme c'est un script de création de tables ont s'assure que celles-ci
-- Soit supprimées avant de les créées.
-- On peut supprimer plusieurs tables en même temps
DROP TABLE IF EXISTS "card",
"label",
"list",
"card_has_list",

-- -----------------------------------------------------
-- Table "card"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "card" (
  -- une clé primaire est automatiquement NOT NULL. Pas besoin de le préciser.
  -- 
  -- afin d'utiliser la génération automatique d'un identifiant on utilise une colonne de type serial (Attention désormais on utilisera plutôt GENERATED ALWAYS AS IDENTITY)
  -- https://wiki.postgresql.org/wiki/Don't_Do_This#Don.27t_use_serial
  -- Mais dans notre projet on utilise serial car sequelize utilise encore serial…
  -- 
  -- serial est un pseudo-type c'est a dire qu'en fait lorsque l'on met "serial"
  --
  "id" serial PRIMARY KEY,
  "titre" text NOT NULL,
  "couleur" text NULL
);

-- -----------------------------------------------------
-- Table "label"
-- -----------------------------------------------------
-- On ne peut pas référencé le champ id de la table question ici, car la table n'existe pas encore. On fera une modification à la fin du script pour ajouter la référence.
CREATE TABLE IF NOT EXISTS "label" (
  "id" serial PRIMARY KEY,
  "name" text NOT NULL
);

-- -----------------------------------------------------
-- Table "list"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "list" (
  "id" serial PRIMARY KEY,
  "name" text NOT NULL
);

-- -----------------------------------------------------
-- Table "quiz_has_tag"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "card_has_list" (
  "card_id" integer REFERENCES "quiz"("id"),
  "list_id" integer REFERENCES "tag" ("id"),
  PRIMARY KEY ("card_id", "list_id")
);
-- Pour mettre fin à au bloc de transaction et l'exécuter
COMMIT;

--
-- Base de données :  "kanban"
--

BEGIN;


--
-- Déchargement des données de la table "card"
--

INSERT INTO "card" ("id", "titre", "couleur") VALUES
(1, 'Use kanban', 'bleu'),
(2, 'learn about kanban', 'rouge'),
(3, 'Get a board','jaune'),


--
-- Déchargement des données de la table "label"
--

INSERT INTO "label" ("id", "name") VALUES
(1, 'label1'),
(3, 'label2'),
(7, 'label3'),
--
-- Déchargement des données de la table "list"
--

INSERT INTO "list" ("id", "name") VALUES
(1, 'To do'),
(2, 'Doing'),
(3, 'Verify'),
(3, 'Done'),


--
-- Déchargement des données de la table "quiz_has_tag"
--

INSERT INTO "card_has_list" ("card_id", "list_id") VALUES
(1, 1),
(1, 6),
(2, 3),

COMMIT;

BEGIN;

--
-- PostGres avec le type serial n'incrémente pas automatiquement de façon implicite la séquence rattaché à la colonne !
-- Il faut donc mettre à jour la valeur courante de chacune des séquences en séléctionnant l'id maximum de chaque table
--
SELECT setval('card_id_seq', (SELECT MAX(id) from "card"));
SELECT setval('list_id_seq', (SELECT MAX(id) from "list"));
SELECT setval('level_id_seq', (SELECT MAX(id) from "level"));

COMMIT;


