import Poisson from './Poisson.js';

export default class Ocean {
    constructor(nbPoissons = 10) {
        this.oceanElement = document.getElementById("ocean");

        this.poissons = [];
        for (let i = 0; i < nbPoissons; i++) {
            const poisson = new Poisson(this.oceanElement);
            poisson.element.onclick = () => poisson.handleClick();
            this.poissons.push(poisson);
        }

    }
    update()
    {
        this.poissons.forEach(poisson => poisson.move());
    }
}

export {Ocean as "Ocean"}
