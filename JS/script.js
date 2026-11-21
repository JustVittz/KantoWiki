if (sessionStorage.getItem("intro-vista")) {
    document.documentElement.classList.add("sem-intro");
} else {
    sessionStorage.setItem("intro-vista", "sim");
}


document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("pokebolas");
    if (!container) {
        return;
    }
    var quantidade = 25;

    for (var i = 0; i < quantidade; i++) {
        var bola = document.createElement("div");
        bola.className = "pokebola";

        var tamanho = 20 + Math.random() * 30;
        var duracao = 8 + Math.random() * 10;

        bola.style.width = tamanho + "px";
        bola.style.height = tamanho + "px";
        bola.style.left = Math.random() * 100 + "%";
        bola.style.animationDuration = duracao + "s";
        bola.style.animationDelay = "-" + Math.random() * duracao + "s";

        container.appendChild(bola);
    }
});
