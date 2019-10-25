
//Variaveis para as imagens
let imgEstrada;
let imgVaca;
let imgCarro = [];
let imgPorco;

//meu placar
let meuPlacar =  0;
let placarOponente = 0;

//Variaveis da Tela

let alturaTela = 400;
let larguraTela = 600;

function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2]= loadImage('imagens/carro-3.png');
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4]= loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');
  imgPorco    = loadImage('imagens/porco.png');
  
  
  // sons
  
  ponto = loadSound('sons/pontos.wav');
  atropelou =  loadSound('sons/colidiu.mp3');
  trilha =  loadSound('sons/trilha.mp3');
}
//vetores
// direita              /    esquerda
let xCarro = [615, 605, 610, -60, -65, -70];
let yCarro = [45, 105, 158, 220, 270, 330];
let velocidadeCarro = [3, 2, 4, 3, 2, 3];


let yVaca = 368;
let xVaca = 150;

let yPorco = 362;
let xPorco = 420;