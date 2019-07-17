function minhaFunção() {
    document.getElementById("demo")
    .innerHTML = "Parágrafo mudado.";


    window.alert("Este é um alerta!");
    console.log("Só apareço com o F12!");

    
}

function minhaFunção2() {
    if(document.getElementById("demo1").innerText.length === 0 ){
    document.getElementById("demo1").innerHTML = "Olá Dolinho!";
        


    document.getElementById("demo2").innerHTML = "O melhor do Brasil. O melhor";
    document.querySelector("#divCentral").style.border = "2px solid crimson";
    }else{
        document.getElementById("demo1").innerHTML = "";

        document.getElementById("demo2").innerHTML = "";
        document.querySelector("#divCentral").style.border = "None";
    }
  




}
