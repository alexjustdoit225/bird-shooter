const canvas = document.getElementById('canvas1'); 
const c = canvas.getContext('2d'); 
const  CANVAS_WIDTH = canvas.width = 600; 
const CANVAS_HEIGHT = canvas.height = 600; 

let birds = []; 
class Bird {
    constructor(){
        this.x; 
        this.y; 
        this.spriteWidth; 
        this.spriteHeight; 
        this.frame; 
        this.speed; 
        this.width; 
        this.height; 
    }
}