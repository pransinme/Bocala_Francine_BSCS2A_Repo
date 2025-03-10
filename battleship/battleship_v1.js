console.log("Battleship Game")
var location1 = 4;
var location2 = 5;
var location3 = 6;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// game logic

while (isSunk == false) {
    guess = Number(prompt("Ready? And FIRE!) (Enter number from 0 to 6)"));

    if (guess < 0 || guess > 6 ) { 
        alert ("Please enter a valid cell number!")
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Hits!')
            hits++;

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!")
            }
        } else {
            alert('Miss!')
        }
    }
}

var stats = " You sank my battleship at: " + guesses + "guesses" + "and your accuracy is " + (3/guesses);

alert(stats);