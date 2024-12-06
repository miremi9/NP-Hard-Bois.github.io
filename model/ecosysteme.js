import { Truite } from "./Poisson.js";

class Ecosysteme {
    constructor(parent) {
        this.poissons = new Map();
    }

    ajouterPoisson(type, number = 1) {
        if (this.poissons.has(type)) {
            this.poissons.set(type, this.poissons.get(type) + number);
        } else {
            this.poissons.set(type, number);
        }
    }

    update() {
        for (const [key, value] of this.poissons.entries()) { // Use for...of
            this.poissons.set(key, value + 2); // Use set to update Map
            console.log(key);
            console.log(value);
        }
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