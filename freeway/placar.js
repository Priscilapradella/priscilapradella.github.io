function setup(){

  createCanvas(600, 400);
  trilha.setVolume(0.2);
  trilha.loop();
}

let placarVaca =0;
let placarPorco= 0;

function mostraPlacar(){
  textSize(32);
  
  fill("Pink")
  text(placarVaca, 190, 28);
  
  fill("Pink")
  text(placarPorco, 400, 28);
  
  if(yVaca < 15){
    placarVaca += 1;
    ponto.play();
    yVaca = 368;
  }
  
  
  if(yPorco < 15){
    placarPorco += 1;
    ponto.play();
    yPorco = 368;
  }
}