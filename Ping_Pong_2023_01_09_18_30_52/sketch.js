//variaveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 13;
let raio = diametro /2 ;
let wRaquete = 10
let hRaquete = 90

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;


//variaveis raquete do oponente
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeyOponent;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0; 

//sons do jogo
let raquetada;
let ponto;
let trilha;

//chances do oponente errar 
let chanceDeErrar = 0;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
//
let colidiu = false; 

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  circle(xBolinha, yBolinha, diametro);
  movimentaBolinha();
  verificaColisaoBorda();
  mostraraquete1(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraraquete2(xRaquete2, yRaquete2);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete2, yRaquete2);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
  
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha ;
  yBolinha += velocidadeyBolinha ;
}

function verificaColisaoBorda(){
  if (xBolinha > width || xBolinha <0){
    velocidadexBolinha *= -1;
  }
  if(yBolinha > height || yBolinha <0){
    velocidadeyBolinha *= -1;
  }
}  

function mostraraquete1(x,y){
  rect(x, y, wRaquete, hRaquete);
}

function mostraraquete2(x,y){
  rect(xRaquete2, yRaquete2, wRaquete, hRaquete);
}



function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + wRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x,y) {
    colidiu = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadexBolinha *= -1;
       raquetada.play();
    }
}

function   movimentaRaqueteOponente(){
  velocidadeyOponente = yBolinha - yRaquete2 - wRaquete /2 - 35;
  yRaquete2 += velocidadeyOponente + chanceDeErrar
  calculaChanceDeErrar()

                       }

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20)
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}
   
function marcaPonto(){
  if (xBolinha > 600){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 3){
    pontosDoOponente += 1;
    ponto.play();
  }
}
function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
  function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
}