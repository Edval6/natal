
var btn = document.querySelector("#btn");

btn.onclick = function(){
    var input = document.querySelector("input");
    var msg = input.value;

    var h1 = document.querySelector("h1");
    h1.textContent = msg;

    var h3 = document.querySelector("h3");
    h3.textContent = "";
}