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

    
}