"use strict";
class Pokemon {
    constructor(nom, pointsDeVie, pointsAttaque, type) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
        this.type = type;
    }
    estMort() {
        if (this.pointsDeVie == 0)
            return true;
        else
            return false;
    }
    attaquer(p) {
        console.log(`${this.nom} attaque ${p.nom} !`);
        if (this.estMort())
            console.log(`${this.nom} a succombé, il ne peut plus combattre !`);
        else if (p.estMort())
            console.log(`${p.nom} ne peut plus se relever, il ne peut plus combattre !`);
        else {
            if (this.type == "Feu") {
                if (p.type == "Plante") {
                    p.pointsDeVie -= (this.pointsAttaque * 2);
                    console.log("C'est super efficace !");
                }
                else if (p.type == "Eau" || p.type == "Feu") {
                    p.pointsDeVie -= (this.pointsAttaque / 2);
                    console.log("Ce n'est pas très efficace !");
                }
                else {
                    p.pointsDeVie -= this.pointsAttaque;
                    console.log("Cette attaque est normale !");
                }
            }
            else if (this.type == "Eau") {
                if (p.type == "Feu") {
                    p.pointsDeVie -= (this.pointsAttaque * 2);
                    console.log("C'est super efficace !");
                }
                else if (p.type == "Plante" || p.type == "Eau") {
                    p.pointsDeVie -= (this.pointsAttaque / 2);
                    console.log("Ce n'est pas très efficace !");
                }
                else {
                    p.pointsDeVie -= this.pointsAttaque;
                    console.log("Cette attaque est normale !");
                }
            }
            else if (this.type == "Plante") {
                if (p.type == "Eau") {
                    p.pointsDeVie -= (this.pointsAttaque * 2);
                    console.log("C'est super efficace !");
                }
                else if (p.type == "Feu" || p.type == "Plante") {
                    p.pointsDeVie -= (this.pointsAttaque / 2);
                    console.log("Ce n'est pas très efficace !");
                }
                else {
                    p.pointsDeVie -= this.pointsAttaque;
                    console.log("Cette attaque est normale !");
                }
            }
        }
    }
    afficherInformations() {
        console.log(`Ce pokémon est ${this.nom}. Il est de type ${this.type}, il a ${this.pointsDeVie} PV et ${this.pointsAttaque} PA.`);
    }
}
let Salamèche = new Pokemon("Salamèche", 17, 5, "Feu");
let Carapuce = new Pokemon("Carapuce", 20, 4, "Eau");
let Bulbizarre = new Pokemon("Bulbizarre", 16, 6, "Plante");
Carapuce.afficherInformations();
Bulbizarre.afficherInformations();
Carapuce.attaquer(Bulbizarre);
Salamèche.afficherInformations();
Salamèche.attaquer(Carapuce);
Salamèche.attaquer(Bulbizarre);
