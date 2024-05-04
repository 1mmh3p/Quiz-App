const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const scores = JSON.parse(localStorage.getItem('scores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    scores.push(score);
    scores.sort((a, b) => b.score - a.score);
    scores.splice(5);

    localStorage.setItem('scores', JSON.stringify(scores));
    window.location.assign('index.html');
};