import scoreKeep from './scores.js';

const displayScore = () => {
  const scoreList = document.querySelector('.scorelist');
  for (let i = 0; i < scoreKeep.length; i += 1) {
    const scoreItem = document.createElement('li');
    scoreItem.innerHTML = `
    <p> ${scoreKeep[i].name} : ${scoreKeep[i].score}</p>`;
    scoreList.append(scoreItem);
  }
};

export default displayScore;