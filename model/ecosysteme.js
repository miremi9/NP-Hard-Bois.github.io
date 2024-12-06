import { Truite, Saumon, Bar, Thon, PoissonRouge, Poisson } from "./Poisson.js";

class Ecosysteme {
    constructor(parent) {
        this.poissons = new Map([["truite", 0], ["saumon", 0], ["bar", 0], ["thon", 0], ["poissonRouge", 0]]);
        this.dico = new Map()
        this.dico.set('truite', new Truite(null));
        this.dico.set('saumon', new Saumon(null));
        this.dico.set('bar', new Bar(null));
        this.dico.set('thon', new Thon(null));
        this.dico.set('poissonRouge', new PoissonRouge(null));

        this.predationTruite = 0.01
        this.lastUpdate = Date.now()

    }

    ajouterPoisson(nom, number = 1) {
        
        if (this.poissons.has(nom)) {
            this.poissons.set(nom, this.poissons.get(nom) + number);
        } else {
            this.poissons.set(nom, number);
        }
    }

    update() {
        if (Date.now()-this.lastUpdate<1000)
        {
            return 
        }
        this.lastUpdate = Date.now()
        for (const [key, value] of this.poissons.entries()) { // Use for...of
            this.poissons.set(key, value); // Use set to update Map
        }

        let [predateur, proid] = this.predation(this.poissons.get("truite"),this.poissons.get("saumon"),this.dico.get("truite").GetPredation(),this.dico.get("truite").GetReproduction(),this.dico.get("saumon").GetReproduction())
        console.log(`Proid: ${Math.round(proid)}, Predateur: ${Math.round(predateur)}`);
        this.poissons.set("truite",predateur)
        this.poissons.set("saumon",proid)
    }


    predation(predateur,proid,tauxPredation,tauxReproductionPredateur,tauxReproductionProid)
    {
        if (proid==0 || predateur == 0)
        {
            return [predateur,proid]
        }

        console.log(predateur,proid,tauxPredation,tauxReproductionPredateur,tauxReproductionProid)
        let predation = tauxPredation * predateur * proid;

        let pertesProid = Math.min(predation, proid);
        proid -= pertesProid;

        let nouvellesPredateur = tauxReproductionPredateur * predateur;
        predateur += nouvellesPredateur;

        let nouveauxProid =tauxReproductionProid * proid;
        proid += nouveauxProid;

        // Affichage des résultats après une mise à jour
        return [Math.round(predateur),Math.round(proid)]
    }

    getNbPoisson() {
        let sum = 0;
        for (const [key, value] of this.poissons.entries()) { // Use for...of
            sum += value;
        }
        return sum;
    }
}

export {Ecosysteme as "Ecosysteme"}