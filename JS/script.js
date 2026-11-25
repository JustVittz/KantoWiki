const PASTA_IMG = "../IMG/";

const WHATSAPP = "5581994942587";

const TIPOS = {
    planta: "Planta",
    veneno: "Veneno",
    fogo: "Fogo",
    agua: "Água",
    voador: "Voador",
    terra: "Terra",
    pedra: "Pedra",
    eletrico: "Elétrico",
    gelo: "Gelo",
    psiquico: "Psíquico"
};

const POKEMON = {

    bulbasauro: {
        nome: "Bulbasauro",
        numero: "0001",
        tema: "planta",
        imagem: "bulbasauro.png",
        curta: "Bulbasaur é um dos Pokémon iniciais da região de Kanto e ocupa a primeira posição na Pokédex Nacional. Conhecido como Pokémon Semente, possui uma pequena planta em suas costas, que cresce e se desenvolve junto com seu corpo desde o nascimento.",
        altura: "0,7 m",
        peso: "6,9 kg",
        categoria: "Semente",
        habilidade: "Overgrow",
        oculta: "Chlorophyll",
        sexo: "♂ ♀",
        tipos: ["planta", "veneno"],
        fraquezas: ["fogo", "voador", "gelo", "psiquico"],
        stats: [["PS", 45], ["Ataque", 49], ["Defesa", 49], ["Atq. Esp.", 65], ["Def. Esp.", 65], ["Velocidade", 45]],
        niveis: [16, 32], 
        evolucoes: [
            { nome: "Bulbasauro", numero: "0001", imagem: "bulbasauro.png", tipos: ["planta", "veneno"] },
            { nome: "Ivysaur", numero: "0002", imagem: "ivysaur.png", tipos: ["planta", "veneno"] },
            { nome: "Venusaur", numero: "0003", imagem: "venusaur.png", tipos: ["planta", "veneno"] }
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
        imagem: "charmander.jpg",
        curta: "Charmander é um dos Pokémon iniciais da região de Kanto e ocupa a quarta posição na Pokédex Nacional. Conhecido como Pokémon Lagartixa, ele possui uma chama característica na ponta de sua cauda, que representa sua energia vital e seu estado de saúde.",
        altura: "0,6 m",
        peso: "8,5 kg",
        categoria: "Lagarto",
        habilidade: "Blaze",
        oculta: "Solar Power",
        sexo: "♂ ♀",
        tipos: ["fogo"],
        fraquezas: ["agua", "terra", "pedra"],
        stats: [["PS", 39], ["Ataque", 52], ["Defesa", 43], ["Atq. Esp.", 60], ["Def. Esp.", 50], ["Velocidade", 65]],
        niveis: [16, 36],
        evolucoes: [
            { nome: "Charmander", numero: "0004", imagem: "charmander.jpg", tipos: ["fogo"] },
            { nome: "Charmeleon", numero: "0005", imagem: "charmeleon.png", tipos: ["fogo"] },
            { nome: "Charizard", numero: "0006", imagem: "charizard.png", tipos: ["fogo", "voador"] }
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
        imagem: "squirtle.jpg",
        curta: "Squirtle é um dos Pokémon iniciais da região de Kanto e ocupa a sétima posição na Pokédex Nacional. Conhecido como Pokémon Tartaruguinha, possui um corpo pequeno e uma carapaça resistente que funciona como proteção contra ataques e ameaças externas.",
        altura: "0,5 m",
        peso: "9,0 kg",
        categoria: "Tartaruga",
        habilidade: "Torrent",
        oculta: "Rain Dish",
        sexo: "♂ ♀",
        tipos: ["agua"],
        fraquezas: ["eletrico", "planta"],
        stats: [["PS", 44], ["Ataque", 48], ["Defesa", 65], ["Atq. Esp.", 50], ["Def. Esp.", 64], ["Velocidade", 43]],
        niveis: [16, 36],
        evolucoes: [
            { nome: "Squirtle", numero: "0007", imagem: "squirtle.jpg", tipos: ["agua"] },
            { nome: "Wartortle", numero: "0008", imagem: "wartortle.png", tipos: ["agua"] },
            { nome: "Blastoise", numero: "0009", imagem: "blastoise.png", tipos: ["agua"] }
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



function sortear(faixa) {
    return faixa[0] + Math.random() * (faixa[1] - faixa[0]);
}



function controlarIntro() {
    if (sessionStorage.getItem("intro-vista")) {
        document.documentElement.classList.add("sem-intro");
    } else {
        sessionStorage.setItem("intro-vista", "sim");
    }
}

function chuvaDePokebolas() {
    const container = document.getElementById("pokebolas");

    for (let i = 0; i < 25; i++) {
        const bola = document.createElement("div");
        const tamanho = sortear([20, 50]);
        const duracao = sortear([8, 18]);

        bola.className = "pokebola";
        bola.style.width = tamanho + "px";
        bola.style.height = tamanho + "px";
        bola.style.left = sortear([0, 100]) + "%";
        bola.style.animationDuration = duracao + "s";
        bola.style.animationDelay = "-" + sortear([0, duracao]) + "s"; // negativo = já começa "no meio" da queda

        container.appendChild(bola);
    }
}

function iniciarFormulario() {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", evento => {
        evento.preventDefault(); 

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        const texto = `Mensagem enviada pelo site KantoWiki.

Nome: ${nome}
E-mail: ${email}

Mensagem:
${mensagem}`;

        const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

        window.open(link, "_blank");
        formulario.reset();
    });
}



function montarSvg(linhas, cores, opacidades = {}) {
    const largura = linhas[0].length;
    const altura = linhas.length;
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${largura} ${altura}" shape-rendering="crispEdges">`;

    for (let y = 0; y < altura; y++) {
        for (let x = 0; x < largura; x++) {
            const letra = linhas[y][x];
            if (letra !== ".") {
                const opacidade = opacidades[letra] ? ` fill-opacity="${opacidades[letra]}"` : "";
                svg += `<rect x="${x}" y="${y}" width="1" height="1" fill="${cores[letra]}"${opacidade}/>`;
            }
        }
    }

    return `url("data:image/svg+xml,${encodeURIComponent(svg + "</svg>")}")`;
}

const EFEITOS = {

    planta: {
        quantidade: 16,
        proporcao: 12 / 16,   
        tamanho: [24, 46],    
        duracao: [9, 18],     
        balanco: [2.5, 4.5],  
        imagem: montarSvg([
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
        tamanho: [28, 54],
        duracao: [7, 14],
        balanco: [0.4, 1.2],
        imagem: montarSvg([
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

    agua: {
        quantidade: 20,
        proporcao: 1,
        tamanho: [14, 44],
        duracao: [8, 16],
        balanco: [2, 4],
        imagem: montarSvg([
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
        ], { O: "#2b7fd0", L: "#bfe3ff", H: "#ffffff" }, { L: 0.5 }) // L fica meio transparente
    }

};

function montarEfeito(tema) {
    const container = document.getElementById("efeitos");
    const config = EFEITOS[tema];

    container.innerHTML = "";

    for (let i = 0; i < config.quantidade; i++) {
        const particula = document.createElement("div");
        const interna = document.createElement("div");
        const altura = sortear(config.tamanho);
        const duracao = sortear(config.duracao);

        particula.className = "particula " + tema;
        particula.style.height = altura + "px";
        particula.style.width = altura * config.proporcao + "px";
        particula.style.left = sortear([0, 96]) + "%";
        particula.style.animationDuration = duracao + "s";
        particula.style.animationDelay = "-" + sortear([0, duracao]) + "s";

        interna.className = "particula-i";
        interna.style.backgroundImage = config.imagem;
        interna.style.animationDuration = sortear(config.balanco) + "s";

        particula.appendChild(interna);
        container.appendChild(particula);
    }
}


function chips(lista) {
    const etiquetas = lista.map(tipo => `<span class="chip ${tipo}">${TIPOS[tipo]}</span>`).join("");
    return `<div class="chips">${etiquetas}</div>`;
}

function secao(titulo, conteudo) {
    return `<h2 class="secao">${titulo}</h2>${conteudo}`;
}

function montarCard(p) {

    const info = [
        ["Altura", p.altura],
        ["Categoria", p.categoria],
        ["Peso", p.peso],
        ["Habilidade", p.habilidade],
        ["Sexo", p.sexo],
        ["Habilidade oculta", p.oculta]
    ];
    const painel = info.map(i => `<div><span>${i[0]}</span><strong>${i[1]}</strong></div>`).join("");

    let stats = "";
    let total = 0;
    p.stats.forEach(s => {
        stats += `
            <div class="stat">
                <span>${s[0]}</span>
                <div class="barra"><div style="--v: ${s[1]}"></div></div>
                <span class="stat-valor">${s[1]}</span>
            </div>`;
        total += s[1];
    });

    let evolucoes = "";
    p.evolucoes.forEach((e, i) => {
        if (i > 0) {
            evolucoes += `<div class="evo-seta"><span>&rsaquo;</span><small>Nv. ${p.niveis[i - 1]}</small></div>`;
        }
        evolucoes += `
            <div class="evo-item">
                <div class="evo-img"><img src="${PASTA_IMG + e.imagem}" alt="${e.nome}"></div>
                <p class="evo-nome">${e.nome}</p>
                <p class="evo-num">N° ${e.numero}</p>
                ${chips(e.tipos)}
            </div>`;
    });

    const descricao = p.descricao.map(t => `<p class="texto">${t}</p>`).join("");
    const curiosidades = p.curiosidades.map(t => `<li>${t}</li>`).join("");
    const ataques = p.ataques.map(t => `<li>${t}</li>`).join("");

    return `
        <h1 class="titulo">${p.nome} <span>N° ${p.numero}</span></h1>

        <section class="topo">
            <div class="foto"><img src="${PASTA_IMG + p.imagem}" alt="${p.nome}"></div>
            <div>
                <p class="texto">${p.curta}</p>
                <div class="info-painel">${painel}</div>
                <h2 class="rotulo">Tipo</h2>${chips(p.tipos)}
                <h2 class="rotulo">Fraquezas</h2>${chips(p.fraquezas)}
            </div>
        </section>

        ${secao("Estatísticas base", `<div class="stats">${stats}<p class="total"><strong>Total: ${total}</strong></p></div>`)}
        ${secao("Evoluções", `<div class="evolucoes">${evolucoes}</div>`)}
        ${secao("Descrição", descricao)}
        ${secao("Curiosidades", `<ul class="texto lista">${curiosidades}</ul>`)}
        ${secao("Principais ataques", `<ul class="texto lista">${ataques}</ul>`)}

        <p class="texto">${p.final}</p>

        <a class="botao zoom" href="home.html#pokemons">Escolher outra opção</a>`;
}


function iniciarPokemon() {
    const p = POKEMON[document.body.dataset.pokemon];

    document.getElementById("card").innerHTML = montarCard(p);
    montarEfeito(p.tema);
}



if (document.getElementById("intro")) {
    controlarIntro();
}

if (document.getElementById("pokebolas")) {
    chuvaDePokebolas();
}

if (document.getElementById("formulario")) {
    iniciarFormulario();
}

if (document.body.dataset.pokemon) {
    iniciarPokemon();
}
