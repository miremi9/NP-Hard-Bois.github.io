import Poisson, { Saumon, Truite } from './Poisson.js';
import Pecheur from './Pecheur.js';
export default class Ocean {
    constructor(nbPoissons = 10,ecosysteme) {
        this.oceanElement = document.getElementById("ocean");
        this.ecosysteme = ecosysteme
        this.poissons = [];
        this.pecheurs = [];
        for (let i = 0; i < (nbPoissons/2); i++) {
            const poisson = new Truite(this.oceanElement,this);
            poisson.element.onclick = () => poisson.handleClick();
            this.poissons.push(poisson);
        }
        for (let i = 0; i < (nbPoissons/2); i++) {
            const poisson = new Saumon(this.oceanElement,this);
            poisson.element.onclick = () => poisson.handleClick();
            this.poissons.push(poisson);
        }   
        this.pecheurs.push(new Pecheur(this.oceanElement,this))

    }
    update()
    {
        
        this.poissons.forEach(poisson => poisson.move());
        this.pecheurs.forEach(pecheur=>pecheur.update())
    }
    SendPoisson(t)
    {
       
        this.ecosysteme.ajouterPoisson(t,1)
    }
}

export {Ocean as "Ocean"}
