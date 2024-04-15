let id = 1;
const yesButton = document.getElementById("yes");
const allButton = document.getElementById("all");
const searchInput = document.getElementById("searchInput");

const sortAToZ = document.getElementById("sortAToZ");
const sortZToA = document.getElementById("sortZToA");
const sortAscending = document.getElementById("sortAscendingPrice");
const sortDescending = document.getElementById("sortDescendingPrice");


function sortPriceDescending() {

    const sortedCards = cards.slice().sort((a, b) => price(b.price) - price(a.price));

    renderCards(sortedCards);
}

function sortPriceAscending() {
    
    const sortedCards = cards.slice().sort((a, b) => price(a.price) - price(b.price));

    renderCards(sortedCards);
}

function price(priceString) {

    if(priceString.toLowerCase() === "free") {

        return 0;

    }

    return parseFloat(priceString.replace("$", ""));

}


function sortAscendingName() {

    const sortedCards = cards.slice().sort((a, b) => a.name.localeCompare(b.name));
    renderCards(sortedCards);

}

function sortDescendingName() {
    const sortedCards = cards.slice().sort((a, b) => b.name.localeCompare(a.name));
    renderCards(sortedCards);
}



function searchFilter() {

    const searchText = searchInput.value.toLowerCase();

    const filteredCards = cards.filter(card => {

        const cardTitle = card.name.toLowerCase();

        return cardTitle.includes(searchText);
    });

    renderCards(filteredCards);
}


const createCard = (card) => {

    const {name, imgsrc, price, description} = card;
    const cardElement = document.createElement("div");
cardElement.setAttribute("class", "cards");
cardElement.innerHTML = `<img class="cardImage" src="${imgsrc}" alt="${name}">
<h1 class="cardTitle">${name}</h1>
<p class="cardPrice">${price}</p>
<p class="cardDescription">${description}</p>
`;

document.getElementById("cardContainer").appendChild(cardElement);
}

const genericTextLong = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et.";


const genericTextShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua.";

const cards = [
    {
        name: "Romeo and Juliet",
        imgsrc: "Images/cardImages/Img1.png",
        price: "$22.99",
        description: genericTextLong
    },
    {
        name: "Don Quixote",
        imgsrc: "Images/cardImages/Img2.png",
        price: "Free",
        description: genericTextLong
    },
    {
        name: "The Master and Margarita",
        imgsrc: "Images/cardImages/Img3.png",
        price: "$37.49",
        description: genericTextShort
    },
    {
        name: "The Picture of Dorian Gray",
        imgsrc: "Images/cardImages/Img4.png",
        price: "$34.99",
        description: genericTextShort
    },
    {
        name: "Frankenstein",
        imgsrc: "Images/cardImages/Img5.png",
        price: "$24.99",
        description: genericTextLong
    },
    {
        name: "Dracula",
        imgsrc: "Images/cardImages/Img6.png",
        price: "$22.49",
        description: genericTextLong
    },
    {
        name: "The Count of Monte Cristo",
        imgsrc: "Images/cardImages/Img7.png",
        price: "$29.99",
        description: genericTextShort
    },
    {
        name: "Pride and Prejudice",
        imgsrc: "Images/cardImages/Img8.png",
        price: "$34.99",
        description: genericTextShort
    },
    {
        name: "Epic of Gilgamesh",
        imgsrc: "Images/cardImages/Img9.png",
        price: "$44.49",
        description: genericTextLong
    },
    {
        name: "Crime and Punishment",
        imgsrc: "Images/cardImages/Img10.png",
        price: "$22.49",
        description: genericTextShort
    },
    {
        name: "Faust",
        imgsrc: "Images/cardImages/Img11.png",
        price: "Free",
        description: genericTextLong
    },
    {
        name: "Alice in Wonderland",
        imgsrc: "Images/cardImages/Img12.png",
        price: "$12.49",
        description: genericTextShort
    },
    {
        name: "The Great Gatsby",
        imgsrc: "Images/cardImages/Img13.png",
        price: "$22.49",
        description: genericTextLong
    },
    {
        name: "Anna Karenina",
        imgsrc: "Images/cardImages/Img14.png",
        price: "$41.49",
        description: genericTextLong
    },
    {
        name: "Iliad",
        imgsrc: "Images/cardImages/Img15.png",
        price: "$44.49",
        description: genericTextLong
    },
    {
        name: "The Sorrows of Young Werther",
        imgsrc: "Images/cardImages/Img16.png",
        price: "69.99",
        description: genericTextShort
    },
    {
        name: "Nineteen Eighty-Four",
        imgsrc: "Images/cardImages/Img17.png",
        price: "$12.49",
        description: genericTextShort
    },
    {
        name: "The Brothers Karamazov",
        imgsrc: "Images/cardImages/Img18.png",
        price: "$62.99",
        description: genericTextShort
    }
];


function renderCards(cardsArray) {
    document.getElementById("cardContainer").innerHTML = "";
    cardsArray.forEach(card => createCard(card));
}


cards.forEach(card => createCard(card));


function yes () {

    if(id === 1) {
        renderCards([cards[1], cards[10]])
        id = 2;
    }
}

function all () {

    if(id === 2) {
        renderCards(cards);
        id = 1;
    }
}

yesButton.addEventListener("click", yes);
allButton.addEventListener("click", all);

searchInput.addEventListener("input", searchFilter);

sortDescending.addEventListener("click", sortPriceDescending);
sortAscending.addEventListener("click", sortPriceAscending);
sortAToZ.addEventListener("click", sortAscendingName);
sortZToA.addEventListener("click", sortDescendingName);