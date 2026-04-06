
const elements = document.querySelectorAll('.introdutorio', '.lendas', '.cards')

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

elements.forEach((element) => myObserver.observe(element))

const data = [

    {
        title: "A Casa da Colina Sombria",
        description:"A lenda de uma casa que ficava no topo de uma colina",
    },

    {
        title: "O Espelho de Cristal",
        description:"Não se atreva a usar esse espelho...",
    },

    {
        title: "A Lenda do Homem da Máscara",
        description:"O temido Homem da Mascara",
    },

    {
        title: "O Relógio de Ouro",
        description:"Tic...tac...tic...tac",
    },

    {
        title: "O Poço da Floresta",
        description:"O solitário poço da floresta",
    },

    {
        title: "Origem",
        description:"O inicio das festas de Halloween",
    },

    {
        title: "Origem nos EUA ",
        description:"Como surgiu as tradições nos Eua",
    },

    {
        title: "Origem no Brasil",
        description:"Como as festas chegaram no Brasil",
    },

    {
        title: "Doçuras ou Travessuras",
        description:"A brincadeira mais tradicional do Halloween",
    },
];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = data => {
    cardContainer.innerHTML = "";
    data.forEach(e => {
        cardContainer.innerHTML += `
        <div class = "searchCard">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
        </div> 
        `
    })
}

searchInput.addEventListener("keyup", (e) => {
    const search = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);
})

window.addEventListener("load", displayData.blind(null,data))





