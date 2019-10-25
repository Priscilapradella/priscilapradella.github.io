function setup() {
  createCanvas(larguraTela, alturaTela);
  
}

function draw() {
  if(frameCount > 400){// +/-8s
    if(placarVaca <5 && placarPorco <5){
    jogar();
     
    } else
      verificaVencedor();
    
    
  }else{
      //tela inicial
    telaInicial();
    
  }
  
}

function verificaVencedor(){
    if(placarVaca >= 5)
      vacaVencedora();
      else
      porcoVencedor();//tela final

}



function telaInicial(){
    background("Pink");
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(49);
    text("Jogo da Av.1º de Maio", 300, 190);
    textSize(22);
    text("Desenvolvido pela Priscila", 300, 230);
}


function vacaVencedora(){
    background("#BB5397");
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(49);
    text("Vaca venceu!", 300, 300);
    image(imgVaca, 200, 100,100,100)
}



function porcoVencedor(){
    background("##B2D220");
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(49);
    text("Porco venceu!", 300, 300);
    image(imgPorco, 200, 100, 100, 100)
}
function jogar(){
background(imgEstrada); 
  mostraVaca();
  movimentaVaca();
  mostraCarros();
  movimentaCarros();
  mostraPlacar();
  mostraPorco();
  movimentaPorco();
  mostraPlacar();
  resetaVacaPorco();
  //detectaColisao();
  atropelamento();

}
