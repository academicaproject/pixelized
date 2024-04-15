const sheet = document.querySelector(".sheet");
const reviews = document.getElementById("reviews");
const sheetOpenButton = document.querySelector(".review");
const sheetClosingButton = document.getElementById("closingButton");

sheetOpenButton.addEventListener("click", function(){
    sheet.classList.add("sheetOpen");
});

sheetClosingButton.addEventListener("click", function(){
    sheet.classList.remove("sheetOpen");
});

fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()).then(data => {
    data.forEach(comment => {

        const header = document.createElement("h5");
        header.innerHTML = comment.name;

        const paragraph = document.createElement("p");
        paragraph.innerHTML = comment.body;

        reviews.appendChild(header);
        reviews.appendChild(paragraph);
    })
}).catch(error => {
    console.log("API error:", error);
})