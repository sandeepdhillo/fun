const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Dispaly = document.querySelector('#p1Display');
const p2Dispaly = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;



p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Dispaly.classList.add('winner');
            p2Dispaly.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Dispaly.textContent = p1Score;

    }
})
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Dispaly.classList.add('winner');
            p1Dispaly.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Dispaly.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();

})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Dispaly.textContent = 0;
    p2Dispaly.textContent = 0;
    p1Dispaly.classList.remove('winner', 'loser');
    p2Dispaly.classList.remove('winner', 'loser');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
