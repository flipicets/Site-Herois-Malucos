const herois = [
    { nome: "Super-Rúbia", universo: "nosso", poder: "forte", ano: 2007},
    { nome: "fofoman", universo: "nosso", poder: "fofinho", ano: 2002},
    { nome: "ursão", universo: "disney", poder: "urso", ano: 2026},
    { nome: "MEGA GALÊ GIGANTAMAX", universo: "pokemon", poder: "gordola", ano: 2024},
    { nome: "Homem-Aranha", universo: "Marvel", poder: "Sentido-aranha", ano: 1962},
    { nome: "Mulher-Maravilha", universo: "DC", poder: "Força sobre-humana", ano: 1941},
    { nome: "Batman", universo: "DC", poder: "Intelecto e habilidades de combate", ano: 1939},
    { nome: "Superman", universo: "DC", poder: "Superforça, voo, visão de calor", ano: 1938},
    { nome: "Homem de Ferro", universo: "Marvel", poder: "Armadura avançada e inteligência", ano: 1963},
    { nome: "Capitão América", universo: "Marvel", poder: "Força sobre-humana e habilidades de combate", ano: 1941},
    { nome: "Thor", universo: "Marvel", poder: "Força divina e controle do trovão", ano: 1962},
    { nome: "Hulk", universo: "Marvel", poder: "Força descomunal e regeneração", ano: 1962},
    { nome: "Flash", universo: "DC", poder: "Velocidade sobre-humana", ano: 1940},
    { nome: "Aquaman", universo: "DC", poder: "Controle sobre a água e comunicação com criaturas marinhas", ano: 1941},
    { nome: "Lanterna Verde", universo: "DC", poder: "Anel de energia que cria construtos de luz verde", ano: 1940},
    { nome: "Wolverine", universo: "Marvel", poder: "Fator de cura e garras retráteis de adamantium", ano: 1974},
    { nome: "Deadpool", universo: "Marvel", poder: "Regeneração acelerada e habilidades de combate", ano: 1991},
    { nome: "Homem-Formiga", universo: "Marvel", poder: "Redução de tamanho e comunicação com formigas", ano: 1962},
    { nome: "Viúva Negra", universo: "Marvel", poder: "Habilidades de combate e espionagem", ano: 1964},
    { nome: "Doutor Estranho", universo: "Marvel", poder: "Magia e manipulação do tempo", ano: 1963},
    { nome: "Pantera Negra", universo: "Marvel", poder: "Força sobre-humana e habilidades de combate", ano: 1966},
    { nome: "Homem de Gelo", universo: "Marvel", poder: "Manipulação de gelo e frio", ano: 1963},
    { nome: "Tempestade", universo: "Marvel", poder: "Controle do clima e manipulação de eletricidade", ano: 1975},
    { nome: "Ciclope", universo: "Marvel", poder: "Emissão de rajadas ópticas de energia", ano: 1963},
    { nome: "Jean Grey", universo: "Marvel", poder: "Telepatia e telecinese", ano: 1963},
    { nome: "Noturno", universo: "Marvel", poder: "Teletransporte e habilidades acrobáticas", ano: 1975},
    { nome: "Colossus", universo: "Marvel", poder: "Transformação em metal orgânico e superforça", ano: 1975},
    { nome: "Gambit", universo: "Marvel", poder: "Manipulação de energia cinética e habilidades de combate", ano: 1990},
    { nome: "Fera", universo: "Marvel", poder: "Força sobre-humana e agilidade aprimorada", ano: 1963},
    { nome: "Mercúrio", universo: "Marvel", poder: "Velocidade sobre-humana", ano: 1964},
    { nome: "Feiticeira Escarlate", universo: "Marvel", poder: "Manipulação da realidade e magia do caos", ano: 1964},
    { nome: "Visão", universo: "Marvel", poder: "Intangibilidade, voo e disparo de rajadas de energia", ano: 1968},
    { nome: "Falcão", universo: "Marvel", poder: "Habilidades de voo e combate", ano: 1969},
    { nome: "Gavião Arqueiro", universo: "Marvel", poder: "Habilidades de arqueiro e combate", ano: 1964},
    { nome: "Cavaleiro da Lua", universo: "Marvel", poder: "Força sobre-humana e habilidades de combate", ano: 1975},
    { nome: "Motoqueiro Fantasma", universo: "Marvel", poder: "Transformação em espírito flamejante e habilidades sobrenaturais", ano: 1972},
    { nome: "Justiceiro", universo: "Marvel", poder: "Habilidades de combate e uso de armas de fogo", ano: 1974},
    { nome: "Demolidor", universo: "Marvel", poder: "Sensos aguçados e habilidades de combate", ano: 1964},
    { nome: "Surfista Prateado", universo: "Marvel", poder: "Manipulação de energia cósmica e voo", ano: 1966},
];

const corpoTabela = document.getElementById("corpoTabela");
const campoBusca = document.getElementById("campoBusca");
const botaoOrdenar = document.getElementById("botaoOrdenar");

console.log("corpoTabela:", corpoTabela);
console.log("campoBusca:", campoBusca);
console.log("botaoOrdenar:", botaoOrdenar);

function mostrarHerois(lista){
    corpoTabela.innerHTML = "";
    lista.forEach(function (heroi){
        const linha = document.createElement("tr");
        linha.innerHTML = 
            "<td>" + heroi.nome + "</td>" + 
            "<td>" + heroi.universo + "</td>" + 
            "<td>" + heroi.poder + "</td>" + 
            "<td>" + heroi.ano + "</td>";
        corpoTabela.appendChild(linha);
    })
}

campoBusca.addEventListener("input", function () {
    const termo = campoBusca.value.toLowerCase();
    const filtrados = herois.filter(function (heroi) {
        return heroi.nome.toLowerCase().includes(termo)
            || heroi.universo.toLowerCase().includes(termo)
            || heroi.poder.toLowerCase().includes(termo);
    });
    mostrarHerois(filtrados);
});

let crescente = true;
botaoOrdenar.addEventListener("click", function () {
    herois.sort(function (a, b) {
        return crescente ? a.ano - b.ano : b.ano - a.ano;
    });
    crescente = !crescente;
    mostrarHerois(herois);
});
mostrarHerois(herois);