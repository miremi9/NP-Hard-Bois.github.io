export default class Poisson {
    constructor(parentElement) {
        // creation element html pour cercle
        this.element = document.createElement('div');
        this.element.className = 'fish';
        parentElement.appendChild(this.element);

        this.resetProperties();
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

        this.element.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;

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
    }
}
