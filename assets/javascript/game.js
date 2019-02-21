// set variables for cyrstals to give random number from 1-12
// EXAMPLE: Math.floor(Math.random() * 31) + 50
var ruby = Math.floor(Math.random() * 12) + 1;
var sapphire = Math.floor(Math.random() * 12) + 1;
var citrine = Math.floor(Math.random() * 12) + 1;
var emerald = Math.floor(Math.random() * 12) + 1;

// set var for random start number from 19-120
// EXAMPLE: Math.floor(Math.random() * ((y-x)+1) + x);
var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

// set var to total incrementing score
var totalscore = 0;

// set variable for wins and losses
var wins = 0;
var losses = 0;

// display the random number
$(".random-number").text(randomNumber);
// console.log("randomNumber " + randomNumber);

// set on clicks for crystals and assign values
$(".ruby").on("click", function () {
    // debugger;
    this.value = ruby;
    console.log("R " + ruby);
    totalscore = totalscore + ruby;
    addCrystals();
    checkScore();
});

$(".sapphire").on("click", function () {
    // debugger;
    this.value = sapphire;
    console.log("S " + sapphire);
    totalscore = totalscore + sapphire;
    addCrystals();
    checkScore();
});

$(".citrine").on("click", function () {
    // debugger;
    this.value = citrine;
    console.log("C " +citrine);
    totalscore = totalscore + citrine;
    addCrystals();
    checkScore();
});

$(".emerald").on("click", function () {
    // debugger;
    this.value = emerald;
    console.log("E " + emerald);
    totalscore = totalscore + emerald;
    addCrystals();
    checkScore();
});

// check the total score against random number
// set totalscore to zero and reset randoms
function checkScore() {
    // debugger;
    if (totalscore === randomNumber) {
        wins++;
        $(".result-text").text("YOU WIN!");
        $(".wins").text(wins);
        resetGame();
    }
    else if (totalscore > randomNumber) {
        losses++;
        $(".result-text").text("YOU LOST!");
        $(".losses").text(losses);
        resetGame();
    }
}

//display score 
function addCrystals() {
    console.log("totalscore " + totalscore);
    $(".total-score").text(totalscore);
}

function resetGame() {
    totalscore = 0
    $(".total-score").text("");
    ruby = Math.floor(Math.random() * 12) + 1;
    sapphire = Math.floor(Math.random() * 12) + 1;
    citrine = Math.floor(Math.random() * 12) + 1;
    emerald = Math.floor(Math.random() * 12) + 1;
    randomNumber = Math.floor(Math.random() * 120 - 19 + 1) + 19;
    $(".random-number").text(randomNumber);
}