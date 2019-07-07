$(document).ready(initializeApp);
function initializeApp() {
    $(".card").on("click", handleCardClick);
}
function toggleModal() {
    $('.modal-shadow').toggleClass('hidden');
}

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var max_matches = 2;


function handleCardClick(event) {
    var clickedCard = $(event.currentTarget).find('.back');
    clickedCard.addClass('hidden');

    if (firstCardClicked == null) {
        firstCardClicked = $(event.currentTarget);
    } else {
        secondCardClicked = $(event.currentTarget);

        var firstCardSource = $(firstCardClicked).find('.front').css('background-image');
        console.log(firstCardSource);

        var secondCardSource = $(secondCardClicked).find('.front').css('background-image');
        console.log(secondCardSource);

        if (firstCardSource === secondCardSource) {
            console.log("MATCH");
            matches++
            console.log(matches);
            firstCardClicked = null;
            secondCardClicked = null;
        } else {
            console.log("NO MATCH");
            var unhide = $(firstCardClicked).add(secondCardClicked).find('.back')
            setTimeout(function () { (unhide).removeClass("hidden");}, 1500);

            firstCardClicked = null;
            secondCardClicked = null;
        }
    }
    if (matches === max_matches) {
        $('.modal-shadow').toggleClass('hidden');
        $('.modal').append('<button class="button">OH SHIT SON<br>YOU WON!</button>');
        $('.button').addEventListener("click", killModal);

    }


}
    // var killModal = modalShadow.addClass('hidden');
