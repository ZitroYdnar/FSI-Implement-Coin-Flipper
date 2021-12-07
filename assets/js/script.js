// TODO: Declare any global variables we need
// TODO: Declare any global variables we need
let headsRolls = 0;
let tailsRolls = 0;

document.addEventListener('DOMContentLoaded', function () {
// This is just a sanity check to make sure your JavaScript script is getting loaded
// You can remove it once you see it in your browser console in the developer tools

// TODO: Add event listener and handler for flip and clear buttons
document.getElementById('flip').addEventListener('click', () => {
 
    let flippedHeads = Math.random() < 0.5

    // Take different actions for heads vs tails flipped
    if (flippedHeads) {
        // Display image and message as heads
        document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
        document.getElementById('message').textContent = 'You Flipped Heads!'

        // Add one to the count of number of heads flipped
        headsRolls += 1
    }
    else {
        // TODO: Update image and status message in the DOM
        document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
        document.getElementById('message').textContent = 'You Flipped Tails!'

        tailsRolls += 1
    }

 

    // Calculate total number of rolls
    let total = headsRolls + tailsRolls

    // Create variables to track percent heads and tails
    let percentHeads = 0
    let percentTails = 0

    // Calculate percentage of heads and tails
    if (total > 0) {
    
        percentHeads = Math.round((headsRolls / total) * 100)
        percentTails = Math.round((tailsRolls / total) * 100)
    }

    // Update the values in the scoreboard table
    document.getElementById('heads').textContent = headsRolls
    document.getElementById('heads-percent').textContent = percentHeads + '%'
    document.getElementById('tails').textContent = tailsRolls
    document.getElementById('tails-percent').textContent = percentTails + '%'
})

document.getElementById('clear').addEventListener('click', function () {
  // Clear Button Click Handler
    // TODO: Reset global variables to 0
    // TODO: Update the scoreboard (same logic as in flip button click handler)

    headsRolls = 0
    tailsRolls = 0

    // Update the message to the user
    document.getElementById('message').textContent = 'Let\'s Get Rolling!'

    // Update the scoreboard
    
    // Calculate total number of rolls
    let total = headsRolls + tailsRolls

  // Make variables to track the percentages of heads and tails
    let percentHeads = 0
    let percentTails = 0

    // TODO: Use the calculated total to calculate the percentages
    if (total > 0) {
        percentHeads = Math.round((headsRolls / total) * 100)
        percentTails = Math.round((tailsRolls / total) * 100)
    }

    // Update the scorboard
    document.getElementById('heads').textContent = headsRolls
    document.getElementById('heads-percent').textContent = percentHeads + '%'
    document.getElementById('tails').textContent = tailsRolls
    document.getElementById('tails-percent').textContent = percentTails + '%'
})
})
