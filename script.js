/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1'); 
const c = canvas.getContext('2d'); 
const  CANVAS_WIDTH = canvas.width = 600; 
const CANVAS_HEIGHT = canvas.height = 600; 

let birds = []; 
class Bird {
    constructor(){
        this.width = 100; 
        this.height = 50;
        this.x = canvas.width; 
        this.y = Math.random() * (canvas.height - this.height); 
        this.directionX = Math.random() * 5 + 3; 
        this.directionY = Math.random() * 5 - 2.5; 
        this.spriteWidth; 
        this.spriteHeight; 
        this.frame = 0; 
        this.speed; 
        this.image = new Image(); 
        this.image.src = "/assets/raven.png"; 

    }
    update(){
        this.x -= this.directionX; 
        this.frame++; 
    }
    draw(){
        c.fillRect(this.x, this.y, this.width, this.height); 
        // c.drawImage(this.x, this.y, this.width, this.height);
        
    }
}

const bird = new Bird(); 

function animate(timestamp){
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
    bird.update(); 
    bird.draw();
    requestAnimationFrame(animate); 
}
animate(); 