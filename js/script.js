/* DICHIARIAMO L'ARRAY CONTENENTE NOME RUOLO E IMMAGINE DI OGNI ELEMENTO DEL TEAM */
let team = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },   
]
/* STAMPIAMO IN CONSOLE L'ARRAY */
console.log(team)

/* RIPRENDIAMO IL CONTAINER DAL DOM */
let card_team = document.getElementById("content_team")

/* CICLO FOR PER CREARE LE CARD CONTENENTI LE VARIE INFO DEL TEAM */
for( let i=0; i<team.length; i++){ 
    /* CREIAMO UN DIV E GLI ASSEGNIAMO LA CLASSE COL-4 E PADDING 3 */
    let div = document.createElement(`div`);
    div.classList.add("col-4");
    div.classList.add ("p-3");

    /* CREIAMO IL DIV CARD E GLI ASSOCIAMO LA CLASSE */
    let card = document.createElement("div");
    card.classList.add("card");
    /* VARIABILI A CUI ASSOCIAMO VALORI PRESI DALL'ARRAY TEAM */
    let nome = `<h4>${team[i].name}</h4>`;
    let role = `<h4>${team[i].role}</h4>`;
    let img = `<h4>${team[i].image}</h4>`

    /* SCRIVIAMO ALL'INTERNO DEL DIV CARD DA NOI CREATO LE INFO PRESE DALL'ARRAY  */
    card.innerHTML = nome + "<br> "+role + "<br> "+img ;
    /* APPENDIAMO CARD AL DIV PRINCIPALE */
    div.appendChild(card)
    /* APPENDIAMO IL DIV PRINCIPALE A CONTAINER DELLE CARD */
    card_team.appendChild(div)
    }
