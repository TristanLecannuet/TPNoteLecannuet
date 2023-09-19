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
    }
}
