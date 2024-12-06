import Poisson, { Saumon, Truite } from './Poisson.js';

export default class Ocean {
    constructor(nbPoissons = 10,ecosysteme) {
        this.oceanElement = document.getElementById("ocean");
        this.ecosysteme = ecosysteme
        this.poissons = [];
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

    }
    update()
    {
        
        this.poissons.forEach(poisson => poisson.move());
    }
    SendPoisson(t)
    {
       
        this.ecosysteme.ajouterPoisson(t,1)
    }
}

export {Ocean as "Ocean"}
