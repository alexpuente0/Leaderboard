import displayScore from './display.js';

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Xzwhz3xZlx98BYaRt5Lw/scores';

const getScoreList = async () => {
  const scores = await fetch(URL);
  return scores.json();
};

const showScores = async () => {
  const getScores = await getScoreList();
  displayScore(getScores.result);
};

const addScore = async (user, score) => {
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { addScore, showScores };
