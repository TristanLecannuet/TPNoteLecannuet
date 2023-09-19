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
}
