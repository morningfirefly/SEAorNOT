// elements
const cells     = document.querySelectorAll('.cell');
const scoreEl   = document.querySelector('#score');
const timeEl    = document.querySelector('#time');
const startBtn  = document.querySelector('#start');
const resetBtn  = document.querySelector('#reset');

// variables
let score = 0;
let time = 10;
let currentPos;

// when cell is clicked, it checks if the bottle/mole is there and updates the score if it is
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (parseInt(cell.getAttribute('data-index')) === currentPos) {
            score++;
            scoreEl.innerHTML = score;
            cells.classList.remove('mole');
        }
    })
});
// adding a listener to the start button by assigning click
startBtn.addEventListener('click', start);

function start() {
    let startGame = setInterval(() => { // looping the game until time's up
        // emptying all cell at the start to ensure no duplicated bottle 
        cells.forEach(cell => {
            cell.innerHTML = '';
        });

        // filling a random cell by adding a div with mole class for the bottle
        currentPos = Math.floor(Math.random() * 9);
        cells[currentPos].innerHTML = '<div class="mole"></div>';

        // checking if time's up
        time--;
        timeEl.innerHTML = time;
        if (time === 0) { // time's up
            clearInterval(startGame); // stop the loop
            // we use setTimeout because without it, alert executes before time updates
            // setTimeout(() => {
                alert('THANKS FOR KEEPING THE BEACH CLEAN!\nPress RESET button to play again :)');
            // }, 100);
        }
    }, 1000);
}
// reloads the game
document.querySelector('#reset').addEventListener('click', function(){
    window.location.reload();
  });
