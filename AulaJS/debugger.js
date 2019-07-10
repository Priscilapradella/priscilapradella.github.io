
window.onload = function(){
   
    console.log("Se quiser me ver, tem que pressionar F12! console...");
    console.log("a = "+ a + " b = " +b);
    console.log("a + b = " + parseInt(a+b) );
};


var a = 10;
var b = 20;

var entradas = document.querySelectorAll('imput');
var entradas = document.querySelector('.resposta');
var botão =  document.querySelector('#btnSomar');




pegaNúmero1 = function(){
    return entradas[0].nodeValue;

}

pegaNúmero2 = function(){
    return entradas[1].value;
}

testarEntradasVazias = function(){
    if(pegaNúmero() === '' || pegaNúmero2() === '')
    return true;
    else
    return false;
}

somar = function(){
    if(testarEntradasVazias()){
        resposta.textContent = "erro: Preencha os dois campos numéricos";
        resposta.classList.remove('correta');
        resposta.classList.add('errada');
        return false;
    }else{
    atualizaResposta();
    }
    }
atualizaResposta = function(){
    let num1 = pegaNúmero1();
    let num2 = pegaNúmero2();
    var soma = num1 + num2;
    resposta.textContent = num1 + ' + '+ num2 +'=' + soma;}
    
    botão.addEventListener('click',somar);