export default class Poisson {
    constructor(parentElement,ocean) {
        // creation element html pour cercle
        this.element = document.createElement('div');
        this.element.Nom = 'fish';
        this.reproduction = 0.1
        this.predation = 0
        this.ocean = ocean
        if (parentElement != null)
        {
            parentElement.appendChild(this.element);
            this.resetProperties();
        }

        

        
    }
    GetPredation()
    {
        return this.predation
    }
    GetReproduction()
    {
        return this.reproduction
    }

    resetProperties() {
        // position initiale
        
        const parentHeight = this.element.parentElement.clientHeight;
        const parentWidth = this.element.parentElement.clientWidth;

        this.x = Math.random() * (parentWidth - 50);
        this.y = Math.random() * (parentHeight - 50);

        // vitesse
        this.speedX = (Math.random() - 0.5) * 5;
        this.speedY = (Math.random() - 0.5) * 5;

        // taille
        this.size = Math.random() * 30 + 20; // entre 20 et 50px
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.backgroundImage = "url('images.jpeg')";
        this.element.style.position = "absolute"
        this.element.style.backgroundSize = "contain"; // ou "cover"
        this.element.style.backgroundRepeat = "no-repeat";
        

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > this.element.parentElement.clientWidth - this.size) {
            this.speedX *= -1;
        }
        if (this.y < 0 || this.y > this.element.parentElement.clientHeight - this.size) {
            this.speedY *= -1;
        }

        this.updatePosition();
    }

    handleClick() {
        console.log("click");
        this.resetProperties();
        this.ocean.SendPoisson(this.Nom)

    }
}
class Truite extends Poisson{
    constructor(parentElement,ocean)
    {
        super(parentElement,ocean)
        this.Nom = "truite"
        this.predation = 0.01
    }
    
    resetProperties()
    {
        super.resetProperties()
        this.element.style.backgroundImage = "url('truite.png')";
    }

} 
class Saumon extends Poisson{
    constructor(parentElement,ocean)
    {
        super(parentElement,ocean)
        this.Nom = "saumon"
    }
    resetProperties()
    {
        super.resetProperties()
        this.element.style.backgroundImage = "url('saumon.jpeg')";
    }
} 
class Bar extends Poisson{
    constructor(parentElement,ocean)
    {
        super(parentElement,ocean)
        this.Nom = "bar"
    }
} 
class Thon extends Poisson{
    constructor(parentElement,ocean)
    {
        super(parentElement,ocean)
        this.Nom = "thon"
    }
} 
class PoissonRouge extends Poisson{
    constructor(parentElement,ocean)
    {
        super(parentElement,ocean)
        this.Nom = "poissonRouge"
    }
} 


export { Truite, Saumon, Bar, Thon, PoissonRouge, Poisson };
