const herois = [
    { nome: "Super-Rúbia", universo: "nosso", poder: "forte", ano: 2007},
    { nome: "fefoman", universo: "nosso", poder: "fofinho", ano: 2002},
    { nome: "ursão", universo: "disney", poder: "urso", ano: 2026},
    { nome: "MEGA GALÊ GIGANTAMAX", universo: "pokemon", poder: "gordola", ano: 2024}
];

const corpoTabela = document.getElementById("corpoTabela");
const campoBusca = document.getElementById("campoBusca");
const botaoOrdenar = document.getElementById("botaoOrdenar");

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
