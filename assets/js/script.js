$(document).ready(initializeApp);
function initializeApp() {
    $(".card").on("click", handleCardClick);
}
function toggleModal() {
    $('.modal-shadow').toggleClass('hidden');
}

var firstCardClicked = null;
var secondCardClicked = null;
var matches = 0;
var max_matches = 9;
var attempts = 0;
var accuracy = 0;
var games_played = 0;
var currentlyFlipped = null;

var displayStats;

function calculateAccuracy() {
    accuracy = matches / attempts * 100;
    if (attempts === 0) {
        accuracy = 0;
    }
}

function displayStats() {
    calculateAccuracy();
    $('.attemptsNum').text(attempts);
    $('.accuracyPerc').text(accuracy.toFixed(0) + "%");
    $('.gamesNum').text(games_played);
}

function resetStats() {
    matches = 0;
    attempts = 0;
    accuracy = 0;
    displayStats();
    $('.modal-shadow').addClass('hidden');
    $('.modal').children('button').remove();
    $('.back').removeClass('hidden');
    console.log("IT WORKS");
}


function handleCardClick(event) {
    // debugger;
    if (currentlyFlipped === 2){
        return;
    }
    var clickedCard = $(event.currentTarget).find('.back');
    // }

    if (firstCardClicked == null) {
        firstCardClicked = $(event.currentTarget);
        clickedCard.addClass('hidden');
        currentlyFlipped += 1;
    } else if (secondCardClicked === null && clickedCard.hasClass("hidden") === false){
        secondCardClicked = $(event.currentTarget);
        clickedCard.addClass('hidden');
        currentlyFlipped += 1;

        if (secondCardClicked != null) {
            // debugger;
            attempts++;

            // $('.accuracyPerc').text(accuracy.toFixed(2) + "%");
            // $('.attemptsNum').text(attempts);

        }


        var firstCardSource = $(firstCardClicked).find('.front').css('background-image');
        console.log(firstCardSource);

        var secondCardSource = $(secondCardClicked).find('.front').css('background-image');
        console.log(secondCardSource);

        if (firstCardSource === secondCardSource) {
            console.log("MATCH");
            matches++
            displayStats();
            console.log(matches);
            currentlyFlipped = 0;
            firstCardClicked = null;
            secondCardClicked = null;
        } else {
            console.log("NO MATCH");
            displayStats();
            var unhide = $(firstCardClicked).add(secondCardClicked).find('.back')
            setTimeout(function () {
                currentlyFlipped = 0;
                (unhide).removeClass("hidden");}, 1500);

            firstCardClicked = null;
            secondCardClicked = null;

        }

}
    if (matches === max_matches) {
        games_played++;
        $('.modal-shadow').toggleClass('hidden');
        $('.modal-shadow').on("click", resetStats);
        $('.modal').append('<button class="button">OH SHIT SON<br>YOU WON!</button>');
        $('.button').on("click", resetStats);
    }
}
    // var killModal = modalShadow.addClass('hidden');
