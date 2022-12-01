const card = document.querySelectorAll(".card");
const imgArea = document.querySelector(".img-area")

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseover", function() {
        card[i].classList.add("active-card");
        if (card[i].dataset.target === "1") {
            imgArea.src="https://www.datocms-assets.com/20955/1613378949-process-innovate.png?fm=jpg&h=400"
        } else if (card[i].dataset.target === "2"){
            imgArea.src="https://www.datocms-assets.com/20955/1613379172-process-deliver.png?fm=jpg&h=400"
        } else if (card[i].dataset.target === "3"){
            imgArea.src="https://www.datocms-assets.com/20955/1613379205-process-dash.png?fm=jpg&h=400"
        } else{
            imgArea.src="https://www.datocms-assets.com/20955/1613379246-process-learn.png?fm=jpg&h=400"
        }
    })
    card[i].addEventListener("mouseout", function() {
        card[i].classList.remove("active-card");
    })
}


// card.addEventListener("mouseover", function() {
//     card.classList.add("active-card");
//     console.log("Caaaaart");
// })
// card.addEventListener("mouseout", function() {
//     card.classList.remove("active-card");
//     console.log("mouseot");
// })