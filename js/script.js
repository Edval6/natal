
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

var red =document.querySelector("#red");

red.onclick = function(){
    var mural = document.querySelector(".mural");
    mural.style.background = "red";

    var h1 = document.querySelector("h1");
    h1.style.color = "white";

    var h3 = document.querySelector("h3");
    h3.style.color = "black";
    h3.style.textShadow = "2px 2px whitesmoke";

}

var indigo =document.querySelector("#indigo");

indigo.onclick = function(){
    var mural = document.querySelector(".mural");
    mural.style.background = "indigo";

    var h1 = document.querySelector("h1");
    h1.style.color = "white";

    var h3 = document.querySelector("h3");
    h3.style.color = "black";
    h3.style.textShadow = "5px 5px darkblue";
}

var black =document.querySelector("#black");

black.onclick = function(){
    var mural = document.querySelector(".mural");
    mural.style.background = "black";

    var h1 = document.querySelector("h1");
    h1.style.color = "white";
    h1.style.textShadow = "3px 3px #6a0f0f";

    var h3 = document.querySelector("h3");
    h3.style.color = "white";
    h3.style.textShadow = "2px 2px #6a0f0f";
}

var blue =document.querySelector("#blue");

blue.onclick = function(){
    var mural = document.querySelector(".mural");
    mural.style.background = "blue";

    var h1 = document.querySelector("h1");
    h1.style.color = "white";

    var h3 = document.querySelector("h3");
    h3.style.color = "black";
    h3.style.textShadow = "2px 2px whitesmoke";
}

var green =document.querySelector("#green");

green.onclick = function(){
    var mural = document.querySelector(".mural");
    mural.style.background = "green";

    var h1 = document.querySelector("h1");
    h1.style.color = "white";

    var h3 = document.querySelector("h3");
    h3.style.color = "black";
    h3.style.textShadow = "2px 2px whitesmoke";
}

var orange =document.querySelector("#orange");

orange.onclick = function(){
    var mural = document.querySelector(".mural");
    mural.style.background = "orange";

    var h1 = document.querySelector("h1");
    h1.style.color = "#de2f2f";
    h1.style.textShadow = "2px 2px #400a0a";

    var h3 = document.querySelector("h3");
    h3.style.color = "white";
    h3.style.textShadow = "2px 2px #400a0a";
}