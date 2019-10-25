//Criação de Funções para organização do código


function resetaVacaPorco(){
  if(yVaca < - 30){
    yVaca = 332;
  }
   if(yPorco < - 30){
    yPorco = 332;
  }
}



function mostraVaca(){

  image(imgVaca, xVaca, yVaca, 28, 28);
}

function mostraPorco(){

  image(imgPorco, xPorco, yPorco, 40, 40);
}


function movimentaPorco(){
  
  if(keyIsDown(UP_ARROW)){
    //yPorco  = yPorco -5;
    if(yPorco > 5)//Teto
      yPorco -= 5;
    
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yPorco < 365)
      yPorco += 5;
    
  }

}

function movimentaVaca(){
  
  if(keyIsDown(87)){
    //yVaca  = yVaca -5;
    if(yVaca > 5)//Teto
      yVaca -= 5;
    
  }
  if(keyIsDown(83)){
    if(yVaca < 365)
      yVaca += 5;
    
  }

}