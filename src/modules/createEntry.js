import scoreKeep from './scores.js';

const displayScore = () => {
  const scoreList = document.querySelector('.scorelist');
  scoreKeep.forEach((entry) => {
    const scoreItem = document.createElement('li');
    scoreItem.innerHTML = `
    <p> ${entry.name} : ${entry.score}</p>`;
    scoreList.append(scoreItem);
  });
};

export default displayScore;
