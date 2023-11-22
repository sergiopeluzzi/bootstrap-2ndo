const titulo = document.querySelector("#titulo-secundario");

titulo.onmouseover = function () {
    titulo.innerHTML = "Novo título colocado pelo JS";
    titulo.setAttribute("style", "color:red");
};
