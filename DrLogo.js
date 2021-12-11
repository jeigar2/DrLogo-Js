document.addEventListener("keydown", moveTurtle);

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    ESC: 27, // reset turtle position
    SHIFT: 16, // turtle Hide / Show
    CTRL: 17, // +10 
    ALT: 18, // -10
    G: 71 // grosor linea
}

var pizarra = document.getElementById("pizarra")
var x = pizarra.width / 2;
var y = pizarra.height / 2;
var area = pizarra.getContext("2d");
var turtleHide = false;
var advance = 1;
var grosorLinea = 3;

function moveTurtle(evento){
    var tecla = evento.keyCode
    var pintar = true;
    switch (tecla) {
        case teclas.DOWN:
            y+= advance;
            break;
        case teclas.UP:
            y-= advance;
            break;
        case teclas.RIGHT:
            x+= advance;
            break;
        case teclas.LEFT:
            x-= advance;
            break;
        case teclas.ESC:
            xInitial = pizarra.width / 2
            yInitial = pizarra.height / 2;
            x = xInitial;
            y = yInitial;
            advance=1;
            turtleHide=false;
            grosorLinea=3;
            break;
        case teclas.SHIFT:
            turtleHide = !turtleHide;
            break;
        case teclas.G:
            grosorLinea+=3;
            break;
        case teclas.CTRL:
            advance+=10;
            break;
        case teclas.ALT:
            if (advance>10){
                advance-=10;
            }
            break;   
        default:
            console.log(tecla);
            pintar = false;
            break;
    }
    if(pintar){
        drawPoint();
    }
}

function drawLine(xInitial, yInitial, xFinish, yFinish){
    area.beginPath();
    area.strokeStyle = "blue";
    area.lineWidth = grosorLinea;
//    area.moveTo(xInitial, yInitial);
    area.lineTo(xFinish, yFinish);
    area.stroke();
    area.closePath();
}

var xInitial = pizarra.width / 2
var yInitial = pizarra.height / 2;
function drawPoint(){
    area.beginPath();
    area.strokeStyle = "blue";
    if(turtleHide){
        area.moveTo(x, y);
        console.log("hide");
    } else {
        area.moveTo(xInitial, yInitial);
    }
    area.lineWidth = grosorLinea;
    area.lineTo(x, y);
    area.stroke();
    area.closePath();
    xInitial = x;
    yInitial = y;
    console.log("x,y = (" + x + "," + y + ")");
}