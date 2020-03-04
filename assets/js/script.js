$(document).ready(initializeApp);

function initializeApp() {
  createBoard(albums);
  $(".card").on("click", handleCardClick);
}

function createCard(obj) {
  var board = $('.container');
  var card = $('<div>').addClass('card');
  var front = $('<img>').addClass('front face').attr(obj);
  var back = $('<img>', {
    class: 'back face',
    src: "assets/images/edges-unselected-200.jpg",
    alt: "Unselected Card"
  });
  card.append(front);
  card.append(back);

  board.append(card);
}

function createBoard(albums) {
  albums = albumShuffle(albums);
  var selectedAlbums = albums.slice(0,9);
  var selectedPairs = selectedAlbums.concat(selectedAlbums);
  var shuffledPairs = albumShuffle(selectedPairs);
  for (let i = 0; i < shuffledPairs.length; i++) {
    createCard(shuffledPairs[i]);
  }
}


function albumShuffle(array) {
  var currentIndex = array.length, tempVal, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -=1;

    tempVal = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempVal;
  }
  return array;
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

function resetBoard() {
  $('.container').empty();
  initializeApp();
  matches = 0;
  attempts = 0;
  accuracy = 0;
  displayStats();

  $('.modal-shadow').addClass('hidden');
  $('.modal').children('button').remove();
  $('.back').removeClass('hidden');
}


function handleCardClick(event) {
    if (currentlyFlipped === 2){
        return;
    }

    var clickedCard = $(event.currentTarget).find('.back');


    if (firstCardClicked == null) {
        firstCardClicked = $(event.currentTarget);
        clickedCard.addClass('hidden');
        currentlyFlipped += 1;
    } else if (secondCardClicked === null && clickedCard.hasClass("hidden") === false){
        secondCardClicked = $(event.currentTarget);
        clickedCard.addClass('hidden');
        currentlyFlipped += 1;

        if (secondCardClicked != null) {
            attempts++;
        }

        var firstCardSource = $(firstCardClicked).find('.front').attr('src');

        var secondCardSource = $(secondCardClicked).find('.front').attr('src');

        if (firstCardSource === secondCardSource) {
            matches++
            displayStats();

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
        $('.modal-shadow').on("click", resetBoard);


      $('.modal').on("click", resetBoard);


    }
}
