$(document).ready(initializeApp);
function initializeApp() {
    $(".card").on("click", handleCardClick);
}

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;


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
        } else {
            console.log("NO MATCH");
            var unhide1 = $(firstCardClicked).find('.back')
            setTimeout(function () { (unhide1).removeClass("hidden");}, 1500);
            var unhide2 = $(secondCardClicked).find('.back')
            setTimeout(function () { (unhide2).removeClass("hidden"); }, 1500);
        }
    }
}

// $(selector).removeClass(classname)

// setTimeout(function () { alert("Hello"); }, 3000);

// function unhide() {
//     var element = document.getElementById("myDIV");
//     element.classList.remove("mystyle");
// }
