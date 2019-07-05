$(document).ready(initializeApp);
function initializeApp() {
    $(".card").on("click", ".card-back", handleCardClick);
}


function handleCardClick(event) {
    var clickedCard = ($(event.currentTarget));
    clickedCard.addClass('hidden');
}
