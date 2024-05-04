const scoresList = document.getElementById("scoresList");
const scores = JSON.parse(localStorage.getItem("scores")) || [];

scoresList.innerHTML = scores
  .map(scoreObj => {
    return `<li class="high-score">${scoreObj.name} - ${scoreObj.score}</li>`;
  })
  .join("");