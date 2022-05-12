import './style.css';
import { addScore, showScores } from './modules/apiRequests.js';
import {
  userError,
  scoreError,
  resetStyle,
  showMsg,
} from './modules/validation.js';

const refreshScores = document.querySelector('.refbtn');
const submitScore = document.querySelector('.sbmtbtn');

refreshScores.addEventListener('click', () => { showScores(); });

submitScore.addEventListener('click', async (event) => {
  event.preventDefault();

  const user = document.getElementById('user');
  const score = document.getElementById('score');

  if (user.value === '') {
    userError();
  } else if (score.value === '') {
    scoreError();
  } else {
    await addScore(user.value, score.value);
    showScores();
    event.target.parentElement.reset();
    resetStyle();
    showMsg();
  }
});
