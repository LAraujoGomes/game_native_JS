let canvas = document.getElementById("canvas1")
let ctx = canvas.getContext("2d")

let CANVAS_WIDTH = canvas.width = 600
let CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = 'sprites/shadow_dog.png' //spritesheet
let spriteWidth = 575
let spriteHeight = 523

let gameFrame = 0 //manipulates de grames
let staggerFrame = 5 //slow the animation
let spriteAnimation = []
let animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let j = 0; j < state.frames; j++){
        let posX = j * spriteWidth
        let posY = index * spriteHeight
        frames.loc.push({x: posX, y: posY})
    }

    spriteAnimation[state.name] = frames
})


function animate(){
    ctx.clearRect(0, 0,CANVAS_WIDTH,CANVAS_HEIGHT)
    let pos = Math.floor(gameFrame/staggerFrame) % spriteAnimation["idle"].loc.length //increases by 1 every time game frame increases by 5, dont ask me how
    framex = spriteWidth * pos
    ctx.drawImage(playerImage, framex, framey*spriteHeight, spriteWidth, spriteHeight, 0 , 0, spriteWidth, spriteHeight) //draws a certain part of the spritesheet
    
    /* Simple innefective way - works by changing valeus of frames horizontally
    if(gameFrame % staggerFrame == 0){
        if(framex < 6 ) framex++
        else framex = 0
    }*/

    gameFrame++
    requestAnimationFrame(animate) //a callback function that 'animates' the animation
}

animate()