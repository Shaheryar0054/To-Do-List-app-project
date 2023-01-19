// import _ from 'lodash';
import './style.css';

// import from src modules
import display from './methods.js';
import Interactive from './interactive.js';

const inputList = document.getElementById('inputList');
const addList = document.getElementById('addList');

inputList.addEventListener('submit', (e) => {
  e.preventDefault();
  display.addLists(addList.value);
  addList.value = '';
});

document.querySelector('#btnClear').addEventListener('click', Interactive.clearCompletedToDoLists);

window.addEventListener('load', () => {
  document.addEventListener('listUpdated', () => {
    Interactive.checkStatusEvent();
  }, false);
  Interactive.checkStatusEvent();
});

display.showLists();