export default class Pecheur {
    constructor(parentElement,ocean) {
        // creation element html pour cercle
        this.element = document.createElement('div');
        this.element.Nom = 'pecheur';
        this.reproduction = 0.1
        this.predation = 0
        this.ocean = ocean
        if (parentElement != null)
        {
            parentElement.appendChild(this.element);
            this.resetProperties();
        } 
    }

    resetProperties() {
        // position initiale

        // vitesse
        this.speedX = (Math.random() - 0.5) * 2;
        const parentHeight = this.element.parentElement.clientHeight;
        const parentWidth = this.element.parentElement.clientWidth;
        this.x = 10;
        this.y = -80;
        // taille
        this.size = 150
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.backgroundImage = "url('../gifpecheur.gif')";
        this.element.style.backgroundSize = "contain"; // ou "cover"
        this.element.style.backgroundRepeat = "no-repeat";

        this.element.style.position = "absolute"
        

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    move() {
        this.x += this.speedX;

        if (this.x < 0 || this.x > this.element.parentElement.clientWidth - this.size) {
            this.speedX *= -1;
        }

        this.updatePosition();
    }
    update()
    {
        if (Math.random()<0.01)
        {
            //peche
            this.ocean.SendPoisson("truite",1)
        }
        this.move()
    }
}

export {Pecheur};
