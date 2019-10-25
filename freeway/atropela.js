let atropelaVaca = false;
let atropelaPorco = false;

function atropelamento(){
  
  for(let i=0; i< imgCarro.length; i++){
  atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], 50, 30);
    
      if(atropelaVaca){
        //vaca atropelada
        yVaca = 367;
        if(placarVaca > 0)//evitar placar negativo
          placarVaca -= 1;
          atropelou.play();
        
      }
    
     atropelaPorco = collideRectRect(xPorco, yPorco, 28, 28, xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaPorco){
        //porco atropelada
        yPorco = 368;
      if(placarPorco > 0)//evitar placar negativo
          placarPorco-= 1;
      atropelou.play();
      }
    
  }
}