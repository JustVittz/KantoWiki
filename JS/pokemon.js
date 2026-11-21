/* isso foi oq eu fiz antes blz */


var POKEMON = {

    bulbasauro: {
        nome: "Bulbasauro",
        numero: "0001",
        tema: "planta",
        efeito: "folha",
        imagem: "../IMG/bulbasauro.png",
        curta: "Bulbasaur é um dos Pokémon iniciais da região de Kanto e ocupa a primeira posição na Pokédex Nacional. Conhecido como Pokémon Semente, possui uma pequena planta em suas costas, que cresce e se desenvolve junto com seu corpo desde o nascimento.",
        altura: "0,7 m",
        peso: "6,9 kg",
        categoria: "Semente",
        habilidade: "Overgrow",
        oculta: "Chlorophyll",
        sexo: "♂ ♀",
        tipos: [["planta", "Planta"], ["veneno", "Veneno"]],
        fraquezas: [["fogo-tipo", "Fogo"], ["voador", "Voador"], ["gelo", "Gelo"], ["psiquico", "Psíquico"]],
        stats: [["PS", 45], ["Ataque", 49], ["Defesa", 49], ["Atq. Esp.", 65], ["Def. Esp.", 65], ["Velocidade", 45]],
        total: 318,
        niveis: [16, 32],
        evolucoes: [
            { nome: "Bulbasauro", numero: "0001", imagem: "../IMG/bulbasauro.png", tipos: [["planta", "Planta"], ["veneno", "Veneno"]] },
            { nome: "Ivysaur", numero: "0002", imagem: "../IMG/ivysaur.png", tipos: [["planta", "Planta"], ["veneno", "Veneno"]] },
            { nome: "Venusaur", numero: "0003", imagem: "../IMG/venusaur.png", tipos: [["planta", "Planta"], ["veneno", "Veneno"]] }
        ],
        descricao: [
            "Essa planta armazena nutrientes e absorve energia solar, permitindo que Bulbasaur utilize diferentes habilidades relacionadas à natureza. Apesar de sua aparência tranquila, ele é capaz de utilizar poderosos ataques dos tipos Planta e Veneno para enfrentar seus adversários. Ao longo de seu desenvolvimento, a semente em suas costas começa a florescer, dando origem a uma planta cada vez maior. Esse processo acompanha suas evoluções para Ivysaur e, posteriormente, Venusaur.",
            "Nos jogos Pokémon Red e Blue, Bulbasaur é uma das três opções de Pokémon inicial oferecidas pelo Professor Oak, sendo uma excelente escolha para treinadores que desejam começar sua jornada com um Pokémon equilibrado e com vantagens contra alguns dos primeiros desafios da região de Kanto."
        ],
        curiosidades: [
            "Apesar de seu nome lembrar dinossauros, Bulbasaur tem como inspiração principal um sapo, especialmente pelas pernas curtas e pelo corpo robusto.",
            "Em 2001, o país de Niue lançou uma moeda comemorativa de prata de 1 dólar neozelandês com uma representação do Bulbasaur em uma de suas faces.",
            "A designer Atsuko Nishida desenvolveu Venusaur primeiro e trabalhou de trás para frente até chegar ao Bulbasaur. Ou seja, o primeiro da Pokédex foi o último de sua linha evolutiva a ser desenhado!"
        ],
        ataques: [
            "Chicote de Cipó (Vine Whip)",
            "Folha Navalha (Razor Leaf)",
            "Pó do Sono (Sleep Powder)",
            "Raio Solar (Solar Beam)"
        ],
        final: "Bulbasaur é uma ótima opção para treinadores iniciantes que gostam de estratégias envolvendo efeitos de status e ataques de Planta. Se você é um jogador que prefere uma jogada pensada e um controle da situação, Bulbasauro é a melhor opção inicial!"
    },

    charmander: {
        nome: "Charmander",
        numero: "0004",
        tema: "fogo",
        efeito: "fogo",
        imagem: "../IMG/charmander.jpg",
        curta: "Charmander é um dos Pokémon iniciais da região de Kanto e ocupa a quarta posição na Pokédex Nacional. Conhecido como Pokémon Lagartixa, ele possui uma chama característica na ponta de sua cauda, que representa sua energia vital e seu estado de saúde.",
        altura: "0,6 m",
        peso: "8,5 kg",
        categoria: "Lagarto",
        habilidade: "Blaze",
        oculta: "Solar Power",
        sexo: "♂ ♀",
        tipos: [["fogo-tipo", "Fogo"]],
        fraquezas: [["agua", "Água"], ["terra", "Terra"], ["pedra", "Pedra"]],
        stats: [["PS", 39], ["Ataque", 52], ["Defesa", 43], ["Atq. Esp.", 60], ["Def. Esp.", 50], ["Velocidade", 65]],
        total: 309,
        niveis: [16, 36],
        evolucoes: [
            { nome: "Charmander", numero: "0004", imagem: "../IMG/charmander.jpg", tipos: [["fogo-tipo", "Fogo"]] },
            { nome: "Charmeleon", numero: "0005", imagem: "../IMG/charmeleon.png", tipos: [["fogo-tipo", "Fogo"]] },
            { nome: "Charizard", numero: "0006", imagem: "../IMG/charizard.png", tipos: [["fogo-tipo", "Fogo"], ["voador", "Voador"]] }
        ],
        descricao: [
            "Essa chama nunca se apaga naturalmente enquanto Charmander está saudável. Quando está animado, ela pode queimar com mais intensidade, enquanto em momentos de fraqueza sua intensidade diminui. Apesar de seu pequeno tamanho, Charmander possui uma personalidade bastante determinada e demonstra grande coragem durante as batalhas. Conforme cresce, sua chama se torna cada vez mais intensa, acompanhando seu desenvolvimento até suas evoluções para Charmeleon e, posteriormente, Charizard, um poderoso Pokémon dos tipos Fogo e Voador.",
            "Nos jogos Pokémon Red e Blue, Charmander é uma das três opções de Pokémon inicial oferecidas pelo Professor Oak. Sua jornada pode ser um pouco mais desafiadora no começo, especialmente contra os primeiros líderes de ginásio, mas seu potencial ofensivo faz dele um excelente companheiro ao longo da aventura."
        ],
        curiosidades: [
            "O nome Charmander combina as palavras inglesas char (queimar ou carbonizar) e salamander (salamandra). A referência também está ligada a antigas lendas europeias que associavam salamandras ao fogo.",
            "Charmander já foi representado com três ou quatro dedos, dependendo da ilustração. Seus sprites originais tinham três dedos, enquanto algumas artes oficiais posteriores passaram a mostrar quatro.",
            "O design de Charmander foi desenvolvido tendo Charizard como referência. Sua aparência foi planejada para que sua evolução até um Pokémon semelhante a um dragão fosse uma surpresa interessante."
        ],
        ataques: [
            "Lança-chamas (Flamethrower)",
            "Brasas (Ember)",
            "Corte (Slash)",
            "Giro de Fogo (Fire Spin)"
        ],
        final: "Charmander é uma excelente escolha para treinadores que preferem um estilo de batalha agressivo, com grande potencial ofensivo. Se você prioriza ataque e ação, Charmander é o pokemon ideal!"
    },

    squirtle: {
        nome: "Squirtle",
        numero: "0007",
        tema: "agua",
        efeito: "bolha",
        imagem: "../IMG/squirtle.jpg",
        curta: "Squirtle é um dos Pokémon iniciais da região de Kanto e ocupa a sétima posição na Pokédex Nacional. Conhecido como Pokémon Tartaruguinha, possui um corpo pequeno e uma carapaça resistente que funciona como proteção contra ataques e ameaças externas.",
        altura: "0,5 m",
        peso: "9,0 kg",
        categoria: "Tartaruga",
        habilidade: "Torrent",
        oculta: "Rain Dish",
        sexo: "♂ ♀",
        tipos: [["agua", "Água"]],
        fraquezas: [["eletrico", "Elétrico"], ["planta", "Planta"]],
        stats: [["PS", 44], ["Ataque", 48], ["Defesa", 65], ["Atq. Esp.", 50], ["Def. Esp.", 64], ["Velocidade", 43]],
        total: 314,
        niveis: [16, 36],
        evolucoes: [
            { nome: "Squirtle", numero: "0007", imagem: "../IMG/squirtle.jpg", tipos: [["agua", "Água"]] },
            { nome: "Wartortle", numero: "0008", imagem: "../IMG/wartortle.png", tipos: [["agua", "Água"]] },
            { nome: "Blastoise", numero: "0009", imagem: "../IMG/blastoise.png", tipos: [["agua", "Água"]] }
        ],
        descricao: [
            "Sua carapaça também contribui para sua movimentação na água, permitindo que nade com facilidade e utilize poderosos jatos de água para atingir seus adversários. Squirtle é conhecido por sua capacidade de se recolher dentro da própria carapaça, utilizando-a como uma defesa natural. Conforme cresce, sua carapaça se torna mais resistente e seu corpo ganha força, acompanhando sua evolução para Wartortle e, posteriormente, Blastoise, um poderoso Pokémon do tipo Água equipado com canhões em sua carapaça.",
            "Nos jogos Pokémon Red e Blue, Squirtle é uma das três opções de Pokémon inicial oferecidas pelo Professor Oak. Sua vantagem contra os primeiros desafios da região de Kanto faz dele uma escolha bastante interessante para treinadores que estão começando sua aventura."
        ],
        curiosidades: [
            "Assim como aconteceu com Charmander, Squirtle foi desenvolvido considerando sua forma evoluída. Seu visual foi pensado para representar uma tartaruga jovem que eventualmente se tornaria Blastoise.",
            "No Japão, Squirtle é chamado de Zenigame. Esse nome está relacionado à expressão japonesa para tartaruga-moeda, uma referência às pequenas tartarugas e ao formato de suas carapaças.",
            "Seu nome combina as palavras inglesas squirt (esguichar) e turtle (tartaruga)."
        ],
        ataques: [
            "Jato de Água (Water Gun)",
            "Hidro Bomba (Hydro Pump)",
            "Mordida (Bite)",
            "Retirada (Withdraw)"
        ],
        final: "Squirtle é uma ótima escolha para treinadores que valorizam resistência e equilíbrio entre defesa e ataque. Se você tem um estilo mais equilibrado entre ataque e defesa, Squirtle é o pokemon perfeito!"
    }

};


/* arte foi feita pelo claundio, resto foi eu blz */

function montarSvg(largura, altura, linhas, cores, opacidades) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + largura + ' ' + altura + '" shape-rendering="crispEdges">';
    for (var y = 0; y < linhas.length; y++) {
        for (var x = 0; x < largura; x++) {
            var c = linhas[y][x];
            if (c !== ".") {
                var op = (opacidades && opacidades[c]) ? ' fill-opacity="' + opacidades[c] + '"' : "";
                svg += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + cores[c] + '"' + op + '/>';
            }
        }
    }
    svg += "</svg>";
    return 'url("data:image/svg+xml,' + encodeURIComponent(svg) + '")';
}

var EFEITOS = {

    folha: {
        quantidade: 16,
        proporcao: 12 / 16,
        tamanhoMin: 24,
        tamanhoMax: 46,
        duracaoMin: 9,
        duracaoMax: 18,
        balancoMin: 2.5,
        balancoMax: 4.5,
        imagem: montarSvg(12, 16, [
            ".....OO.....",
            "....OGGO....",
            "...OGGLGO...",
            "..OGGLGGGO..",
            "..OGLGVGGO..",
            ".OGLGGVGGGO.",
            ".OGLGGVGGGO.",
            ".OGGGGVGGGO.",
            ".OGGGGVGGGO.",
            ".OGGGGVGGGO.",
            "..OGGGVGGO..",
            "..OGGGVGGO..",
            "...OGGVGO...",
            "....OGVO....",
            ".....OVO....",
            "......V....."
        ], { O: "#2e7d32", G: "#66bb6a", L: "#a5d6a7", V: "#1b5e20" })
    },

    fogo: {
        quantidade: 18,
        proporcao: 10 / 14,
        tamanhoMin: 28,
        tamanhoMax: 54,
        duracaoMin: 7,
        duracaoMax: 14,
        balancoMin: 0.4,
        balancoMax: 1.2,
        imagem: montarSvg(10, 14, [
            ".....R....",
            ".....RR...",
            "....RRR...",
            "...RRORR..",
            "..RRROORR.",
            "..RROOORR.",
            ".RRROOYORR",
            ".RROOYYOOR",
            ".RROOYYOOR",
            ".RROOYYOOR",
            ".RRROYYORR",
            "..RROOOORR",
            "...RRRRRR.",
            "....RRRR.."
        ], { R: "#e53935", O: "#ff9800", Y: "#ffe082" })
    },

    bolha: {
        quantidade: 20,
        proporcao: 1,
        tamanhoMin: 14,
        tamanhoMax: 44,
        duracaoMin: 8,
        duracaoMax: 16,
        balancoMin: 2,
        balancoMax: 4,
        imagem: montarSvg(10, 10, [
            "...OOOO...",
            "..OLLLLO..",
            ".OLHHLLLO.",
            "OLHLLLLLLO",
            "OLLLLLLLLO",
            "OLLLLLLLLO",
            "OLLLLLLLLO",
            ".OLLLLLLO.",
            "..OLLLLO..",
            "...OOOO..."
        ], { O: "#2b7fd0", L: "#bfe3ff", H: "#ffffff" }, { L: 0.5 })
    }

};

function montarEfeito(nome) {

    var container = document.getElementById("efeitos");
    var config = EFEITOS[nome];

    container.innerHTML = "";

    for (var i = 0; i < config.quantidade; i++) {

        var particula = document.createElement("div");
        particula.className = "particula " + nome;

        var interna = document.createElement("div");
        interna.className = "particula-i " + nome;
        interna.style.backgroundImage = config.imagem;

        var altura = config.tamanhoMin + Math.random() * (config.tamanhoMax - config.tamanhoMin);
        var duracao = config.duracaoMin + Math.random() * (config.duracaoMax - config.duracaoMin);

        particula.style.height = altura + "px";
        particula.style.width = altura * config.proporcao + "px";
        particula.style.left = Math.random() * 96 + "%";
        particula.style.animationDuration = duracao + "s";
        particula.style.animationDelay = "-" + Math.random() * duracao + "s";

        interna.style.animationDuration = config.balancoMin + Math.random() * (config.balancoMax - config.balancoMin) + "s";

        particula.appendChild(interna);
        container.appendChild(particula);
    }
}

/* nao mexe por favor vitor nisso nao ok  */


function chips(lista, centro) {
    return '<div class="chips' + (centro ? " centro" : "") + '">' +
        lista.map(function (t) {
            return '<span class="chip ' + t[0] + '"> ' + t[1] + ' </span>';
        }).join("") +
        '</div>';
}

function montarCard(p) {

    var stats = p.stats.map(function (s) {
        return '<div class="stat">' +
            '<span class="stat-nome"> ' + s[0] + ' </span>' +
            '<div class="barra"> <div style="--v: ' + s[1] + '"></div> </div>' +
            '<span class="stat-valor"> ' + s[1] + ' </span>' +
            '</div>';
    }).join("");

    var evolucoes = "";
    p.evolucoes.forEach(function (e, i) {
        if (i > 0) {
            evolucoes += '<div class="evo-seta"><span> &rsaquo; </span><small> Nv. ' + p.niveis[i - 1] + ' </small></div>';
        }
        evolucoes += '<div class="evo-item">' +
            '<div class="evo-img"> <img src="' + e.imagem + '" alt="' + e.nome + '"> </div>' +
            '<p class="evo-nome"> ' + e.nome + ' </p>' +
            '<p class="evo-num"> N° ' + e.numero + ' </p>' +
            chips(e.tipos, true) +
            '</div>';
    });

    var descricao = p.descricao.map(function (t) {
        return '<p class="texto"> ' + t + ' </p>';
    }).join("");

    var curiosidades = p.curiosidades.map(function (t) { return '<li> ' + t + ' </li>'; }).join("");
    var ataques = p.ataques.map(function (t) { return '<li> ' + t + ' </li>'; }).join("");

    return '' +
        '<h1 class="titulo"> ' + p.nome + ' <span> N° ' + p.numero + ' </span> </h1>' +

        '<section class="topo">' +
            '<div class="foto"> <img src="' + p.imagem + '" alt="' + p.nome + '"> </div>' +
            '<div class="resumo">' +
                '<p class="descricao-curta"> ' + p.curta + ' </p>' +
                '<div class="info-painel">' +
                    '<div> <span> Altura </span> <strong> ' + p.altura + ' </strong> </div>' +
                    '<div> <span> Categoria </span> <strong> ' + p.categoria + ' </strong> </div>' +
                    '<div> <span> Peso </span> <strong> ' + p.peso + ' </strong> </div>' +
                    '<div> <span> Habilidade </span> <strong> ' + p.habilidade + ' </strong> </div>' +
                    '<div> <span> Sexo </span> <strong> ' + p.sexo + ' </strong> </div>' +
                    '<div> <span> Habilidade oculta </span> <strong> ' + p.oculta + ' </strong> </div>' +
                '</div>' +
                '<h2 class="rotulo"> Tipo </h2>' + chips(p.tipos) +
                '<h2 class="rotulo"> Fraquezas </h2>' + chips(p.fraquezas) +
            '</div>' +
        '</section>' +

        '<h2 class="secao"> Estatísticas base </h2>' +
        '<div class="stats">' + stats + '<p class="total"> <strong> Total: ' + p.total + ' </strong> </p></div>' +

        '<h2 class="secao"> Evoluções </h2>' +
        '<div class="evolucoes">' + evolucoes + '</div>' +

        '<h2 class="secao"> Descrição </h2>' + descricao +

        '<h2 class="secao"> Curiosidades </h2>' +
        '<ul class="texto lista">' + curiosidades + '</ul>' +

        '<h2 class="secao"> Principais ataques </h2>' +
        '<ul class="texto lista">' + ataques + '</ul>' +

        '<p class="texto"> ' + p.final + ' </p>' +

        '<div class="centro-botao"> <a class="botao-voltar" href="index.html#pokemons"> Escolher outra opção </a> </div>';
}

function mostrar(id, atualizarEndereco) {

    var p = POKEMON[id];
    if (!p) {
        id = "bulbasauro";
        p = POKEMON[id];
    }

    document.body.className = "tema-" + p.tema;
    document.title = "PokeWiki - " + p.nome;

    var card = document.getElementById("card");
    card.innerHTML = montarCard(p);
    card.classList.remove("trocando");
    void card.offsetWidth;
    card.classList.add("trocando");

    var abas = document.querySelectorAll("#troca a");
    for (var i = 0; i < abas.length; i++) {
        abas[i].classList.toggle("ativo", abas[i].dataset.p === id);
    }

    montarEfeito(p.efeito);

    if (atualizarEndereco) {
        history.replaceState(null, "", "?p=" + id);
        window.scrollTo(0, 0);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    var abas = document.querySelectorAll("#troca a");
    for (var i = 0; i < abas.length; i++) {
        abas[i].addEventListener("click", function (evento) {
            evento.preventDefault();
            mostrar(this.dataset.p, true);
        });
    }

    var id = new URLSearchParams(window.location.search).get("p");
    mostrar(id, false);
});