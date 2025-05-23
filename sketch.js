let x; //criando variavel x
let y; //criando variavel y


function setup() {
  createCanvas(400, 400);
  x = random(400); //sorteando numero até 400
  x = int(x); //caso venha um numero com "," ele deixa inteiro
  y = random(400);
  y = int(y);
}

function draw() {
  background("black"); //fundo
   
  x = x + random (-2, 2)
  y = y + random (-2, 2)
  x = constrain(x,0,400)
  y = constrain(y,0,400)
   let distanciaX; //cateto
    let distanciaY; //cateto
    let distancia; //hipotenusa
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
    distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    circle(mouseX, mouseY, distancia); //circulo com coordenadas aleatorias
  if(distancia < 200){
      fill("darkblue")
    circle(mouseX, mouseY, distancia)
      }
  if(distancia < 150){
      fill("pink")
    circle(mouseX, mouseY, distancia)
      }
  if(distancia < 100){
      fill("orange")
    circle(mouseX, mouseY, distancia)
      }
  if(distancia < 60){
      fill("skyblue")
    circle(mouseX, mouseY, distancia)
      }
  if(distancia < 20){
      fill("red")
    circle(mouseX, mouseY, distancia)
      }
  if(distancia < 8) { //se a posição do mouse for x
    fill("purple")
    textSize(24);
    text("mimidoyoongi!", 65, 200); //mostra encontrei
    noLoop(); //fara com que fique aparecendo "encontrei" até reniciar

  }
   if(mouseIsPressed){
    console.log(mouseX,mouseY)
  }
}