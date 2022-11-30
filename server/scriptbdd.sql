DROP TABLE IF EXISTS Produit;
DROP TABLE IF EXISTS Categorie;


CREATE TABLE Categorie (
  idCat int NOT NULL AUTO_INCREMENT,
  nom_cat varchar(25) NOT NULL UNIQUE,
  PRIMARY KEY (idCategorie)
);

CREATE TABLE Produit(
    id int NOT NULL AUTO_INCREMENT,
    nom varchar(60) NOT NULL UNIQUE,
    prix float NOT NULL,
    cat int NOT NULL,
    stock boolean NOT NULL,
    descript varchar(255),
    url varchar(1000),
    PRIMARY KEY (id),
    FOREIGN KEY (cat) REFERENCES Categorie(idCat)
)