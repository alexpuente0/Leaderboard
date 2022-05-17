/* eslint-disable no-undef */
// undefined vars are not used on this module, but modify the index

const userError = () => {
  user.placeholder = 'Error: Insert Name';
  user.style.backgroundColor = '#ffc0cb';
  user.style.border = '2px solid #bd1212';
};

const resetStyle = () => {
  user.placeholder = 'Your Name';
  user.style.backgroundColor = '#fff';
  user.style.border = '2px solid #000';
};

const hideMsg = () => {
  document.querySelector('.msg').style.display = 'none';
};

const showMsg = () => {
  document.querySelector('.msg').style.display = 'flex';
  setTimeout(hideMsg, 2000);
};

export {
  userError, resetStyle, showMsg
};