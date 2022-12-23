
var btn = document.querySelector("#btn");

btn.onclick = function(){

    // Mensagem Personalizada
    var input = document.querySelector("#mensagem");
    var msg = input.value;

    var h1 = document.querySelector("h1");
    h1.textContent = msg;


    //Nome 

    var input2 = document.querySelector("#nom");
    var nome = input2.value;

    var h3 = document.querySelector("h3");
    h3.textContent = nome;
}