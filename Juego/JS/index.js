//Para llamar el canvaz con el id especificado 
var contexto= document.getElementById("lienzo_Juego").getContext("2d")
contexto.canvas.width = 300
contexto.canvas.height = 530

var FPS=60
var gravedad=1.5

var personaje ={
    x:50,
    y:150,
    w:50,
    h:50
}

var Tuberias = new Array()
Tuberias[0]={
    x:contexto.canvas.width,
    y:0
}

//Variable Imagenes 
var bird= new Image()
bird.src="../imagenes/bird.png"

var background= new Image()
background.src="../imagenes/background.png"

var tuberiaNorte= new Image()
tuberiaNorte.src="../imagenes/tuberiaNorte.png"

var tuberiaSur= new Image()
tuberiaSur.src="../imagenes/tuberiaSur.png"

var suelo= new Image()
suelo.src="../imagenes/suelo.png"


//Control 
function precionar(){
    //Al precionar cualquier boton el personaje salta 35px
    personaje.y -=35

}
setInterval(loop,1000/FPS)
//Bucle 
function loop(){
    contexto.clearRect(0,0,300,530)

    //Fondo
    contexto.drawImage(background,0,0)
    //Suelo
    contexto.drawImage(suelo,0,contexto.canvas.height - suelo.height)
    //Personaje 
    contexto.drawImage(bird,personaje.x,personaje.y)
    //Tuberias
    for(var i=0; i<Tuberias.length; i++){
        var constante= tuberiaNorte.height +80
    contexto.drawImage(tuberiaNorte,Tuberias[i].x,Tuberias[i].y)
    contexto.drawImage(tuberiaSur,Tuberias[i].x,Tuberias[i].y + constante)
    Tuberias[i].x--
    }

    personaje.y += gravedad
}

window.addEventListener("keyDown",precionar)