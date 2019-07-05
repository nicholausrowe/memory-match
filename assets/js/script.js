$(document).ready(initializeApp);
function initializeApp() {
    $(".card").on("click", handleCardClick);
}

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;




//var firstCardSource = $(this).find('.back').css(background - image);
// var secondCardSource = $("secondCardClicked.find('front')").css("background-image");

function handleCardClick(event) {
    var clickedCard = $(event.currentTarget).find('.card-back');
    clickedCard.addClass('hidden');
    if (firstCardClicked == null) {
        firstCardClicked = $(event.currentTarget);
        console.log(firstCardClicked);
        var firstCardSource = $(firstCardClicked).find('.front').css('background-image');
        console.log(firstCardSource);
    } else {
        secondCardClicked = $(event.currentTarget);
        console.log(secondCardClicked);
        var secondCardSource = $(secondCardClicked).find('.front').css('background-image');
        console.log(secondCardSource);
        if (firstCardSource === secondCardSource) {
            console.log("MATCH");
        } else {
            console.log("NO MATCH");
        }
    }
}
// var target = $(this);
// var backDom = target.find('.back');

// $(this).find('.back').css(background - image)


// var firstDiv = firstCardClicked.find('front')
// console.log(firstDiv)

// var firstCardSource =

// $(thing).css("background-image");

// console.log(firstCardSource)

// $("ul li:nth-child(2)").append("<span> - 2nd!</span>");

//firstCardClicked.find('front')






//var firstCardClicked = $(event.currentTarget)
