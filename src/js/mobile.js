const card = document.querySelectorall(".card");


card.addEventListener("mouseover", function() {
    card.classList.add("active-card");
    console.log("Caaaaart");
})
card.addEventListener("mouseout", function() {
    card.classList.remove("active-card");
    console.log("mouseot");
})