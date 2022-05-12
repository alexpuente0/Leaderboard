const displayScore = (scoreArr) => {
  const scoreList = document.querySelector('.scorelist');
  scoreList.innerHTML = null;
  scoreArr.sort((a, b) => b.score - a.score);
  scoreArr.slice(0, 10).forEach((item) => {
    const scoreItem = document.createElement('li');
    scoreItem.innerHTML = `<p> ${item.user} : ${item.score}</p>`;
    scoreList.append(scoreItem);
  });
};

export default displayScore;
