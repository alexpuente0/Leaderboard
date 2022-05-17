import './style.css';
import { addScore, showScores } from './modules/apiRequests.js';
import {
  userError,
  resetStyle,
  showMsg,
} from './modules/validation.js';

const refreshScores = document.querySelector('.refbtn');
const submitScore = document.querySelector('.sbmtbtn');

refreshScores.addEventListener('click', () => { showScores(); });

submitScore.addEventListener('click', async (event) => {
  event.preventDefault();

  const user = document.getElementById('user');
  const score = Math.floor(Math.random() * (1000000 - 1 + 1) + 1);

  if (user.value === '') {
    userError();
  } else {
    await addScore(user.value, score);
    event.target.parentElement.reset();
    resetStyle();
    showMsg();
  }
});
