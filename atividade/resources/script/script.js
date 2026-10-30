let novoParagrafo = document.createElement("p");
let body = document.querySelector("body");
let div = document.createElement("div");
novoParagrafo.innerText = "ola";
div.innerText = "essa eh uma div";
//comando para adicionar uma nova tag filho
body.appendChild(novoParagrafo);

body.replaceChild(div.novoParagrafo);

body.removeChild(div)
