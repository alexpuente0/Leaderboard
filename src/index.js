import './style.css';
import { addScore, showScores } from './modules/apiRequests.js';

const refreshScores = document.querySelector('.refbtn');
const submitScore = document.querySelector('.sbmtbtn');

refreshScores.addEventListener('click', () => { showScores(); });

submitScore.addEventListener('click', async (event) => {
  event.preventDefault();
  const user = document.getElementById('user');
  const score = document.getElementById('score');

  await addScore(user.value, score.value);
  showScores();
});
