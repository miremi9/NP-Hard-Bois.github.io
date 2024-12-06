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

    }

    ajouterPoisson(nom, number = 1) {
        
        if (this.poissons.has(nom)) {
            this.poissons.set(nom, this.poissons.get(nom) + number);
        } else {
            this.poissons.set(nom, number);
        }
    }

    update() {

        for (const [key, value] of this.poissons.entries()) { // Use for...of
            this.poissons.set(key, value); // Use set to update Map
        }
        //console.log(this.dico["truite"])
        //this.predation(this.poissons["truite"],this.poissons["saumon"],this.dico["truite"].GetPredation(),this.dico["truite"].GetReproduction(),this.dico["saumon"].GetReproduction())
    }


    predation(predateur,proid,tauxPredation,reproduction)
    {
        let predation = tauxPredation * predateur * proid;

        let pertesProid = Math.min(predation, proid);
        proid -= pertesProid;

        let nouvellesPredateur = this.tauxReproductionPredateur * predateur;
        predateur += nouvellesPredateur;

        let nouveauxProid = this.tauxReproductionProid * proid;
        proid += nouveauxProid;

        // Affichage des résultats après une mise à jour
        console.log(`Proid: ${Math.round(predateur)}, Predateur: ${Math.round(proid)}`);
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