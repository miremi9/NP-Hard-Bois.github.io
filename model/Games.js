import { Ecosysteme } from "./ecosysteme.js";
import { Ocean} from "./Ocean.js";
import {Truite,Poisson} from "./Poisson.js";

class Game
{
    constructor(parent)
    {
        //update compteur poisson
        this.ecosysteme = new Ecosysteme()
        this.ecosysteme.ajouterPoisson(Truite,2)
        this.ocean = new Ocean()


        
    }
    async startGame()
    {
        while(true)
            {
                this.update()
                await sleep(10);

            }
    }
    update()
    {
        this.ecosysteme.update()
        this.ocean.update()
        const compteur = document.querySelector('.compteurPoisson');
        let nbPoisson = this.ecosysteme.getNbPoisson()
        console.log(nbPoisson)
        compteur.textContent = "Nb Poisson = "+nbPoisson
        
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let game = new Game()
game.startGame()