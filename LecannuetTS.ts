class Pokemon{
    private nom:string;
    private pointsDeVie:number;
    private pointsAttaque:number;
    private type:string;

    constructor(nom:string, pointsDeVie:number, pointsAttaque:number, type:string){
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
        this.type = type;
    }

    estMort():boolean{
        if(this.pointsDeVie == 0)
            return true;
        else
            return false;
    }

    attaquer(p:Pokemon):void{
        console.log(`${this.nom} attaque ${p.nom} !`)
        if(this.estMort())
            console.log(`${this.nom} a succombé, il ne peut plus combattre !`)
        else if(p.estMort())
            console.log(`${p.nom} ne peut plus se relever, il ne peut plus combattre !`)

    }
}