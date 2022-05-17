const displayScore = (scoreArr) => {
  const scoreList = document.querySelector('.scorelist');
  scoreList.innerHTML = null;
  scoreArr.sort((a, b) => b.score - a.score);
  scoreArr.forEach((item) => {
    const scoreItem = document.createElement('li');
    scoreItem.innerHTML = `<div class="scitem"><p>${item.user}</p><p>:    ${item.score}</p></div>`;
    scoreList.append(scoreItem);
  });
};

export default displayScore;
