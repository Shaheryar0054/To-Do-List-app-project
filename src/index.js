import './style.css';

import display from './module/todo.js';

const edittodoForm = document.querySelector('#edit-todo-item');
const enterBtn = document.querySelector('.enter-btn');
const editTodoFormInput = document.querySelector('.todo-edit-input');

window.addEventListener('DOMContentLoaded', () => {
  const task = display.getTodoList();
  display.populateTodo(task);
});

enterBtn.addEventListener('click', () => {
  display.addTodoList();
});

edittodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Number(editTodoFormInput.getAttribute('id'));
  display.updateTaskInput(editTodoFormInput.value, id);
  editTodoFormInput.value = '';
  document.querySelector('.type-task').style.display = 'block';
  edittodoForm.style.display = 'none';
});