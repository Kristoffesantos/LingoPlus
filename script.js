function showMessage() {
    alert("Welcome to LingoPlus! Start searching for an IT term to learn.");
}


const searchInput = document.querySelector("#terms input");
const cards = document.querySelectorAll("#terms .card");


searchInput.addEventListener("input", function() {
    const search = searchInput.value.toLowerCase();


    cards.forEach(function(card) {
        const text = card.textContent.toLowerCase();


        if (text.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
