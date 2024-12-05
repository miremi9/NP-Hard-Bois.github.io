class Cercle {
    constructor(parent) {
        // Créer un élément HTML pour le cercle
        this.element = document.createElement('div');
        this.element.classList.add('fish');
        parent.appendChild(this.element);

        // Définir une position et une direction aléatoires
        this.resetProperties();
    }

    resetProperties() {
        // Position initiale aléatoire
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;

        // Vitesse aléatoire (entre -3 et 3)
        this.vx = (Math.random() - 0.5) * 6;
        this.vy = (Math.random() - 0.5) * 6;

        // Taille aléatoire
        this.size = Math.random() * 30 + 20; // Entre 20px et 50px
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;

        // Couleur aléatoire
        this.element.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    move() {
        // Mettre à jour la position
        this.x += this.vx;
        this.y += this.vy;

        // Vérifier les collisions avec les bords
        if (this.x < 0 || this.x > window.innerWidth - this.size) {
            this.vx *= -1; // Rebond horizontal
        }
        if (this.y < 0 || this.y > window.innerHeight - this.size) {
            this.vy *= -1; // Rebond vertical
        }

        this.updatePosition();
    }

    handleCollision(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Vérifie si les deux cercles se chevauchent
        if (distance < (this.size + other.size) / 2) {
            // Inverser la direction de mouvement
            this.vx *= -1;
            this.vy *= -1;

            other.vx *= -1;
            other.vy *= -1;

            // Éloigner légèrement les cercles pour éviter un chevauchement prolongé
            const angle = Math.atan2(dy, dx);
            const overlap = (this.size + other.size) / 2 - distance;
            this.x += Math.cos(angle) * overlap / 2;
            this.y += Math.sin(angle) * overlap / 2;

            other.x -= Math.cos(angle) * overlap / 2;
            other.y -= Math.sin(angle) * overlap / 2;

            this.updatePosition();
            other.updatePosition();
        }
    }

    handleClick() {
        // Réinitialise les propriétés quand le cercle est cliqué
        console.log(`Cercle cliqué à la position (${this.x}, ${this.y})`);
        this.resetProperties();
    }
}

// Créer et animer les cercles
const cercles = [];
for (let i = 0; i < 10; i++) { // Ajoute 10 cercles
    const cercle = new Cercle(document.body);
    cercle.element.onclick = () => cercle.handleClick();
    cercles.push(cercle);
}

// Animer les cercles
function animate() {
    // Déplace chaque cercle
    cercles.forEach(cercle => cercle.move());

    // Vérifie les collisions entre les cercles
    for (let i = 0; i < cercles.length; i++) {
        for (let j = i + 1; j < cercles.length; j++) {
            cercles[i].handleCollision(cercles[j]);
        }
    }

    requestAnimationFrame(animate);
}
animate();
