import './style.css';

const InnerTodo = document.querySelector('.todo-inner-content');

const ToDo = [
  {
    description: 'Learn webpack',
    tasksCompleted: false,
    index: 0,
  },
  {
    description: 'DOM',
    tasksCompleted: false,
    index: 1,
  },
  {
    description: 'Learn javscript',
    tasksCompleted: false,
    index: 2,
  },
  {
    description: 'Learn HTML',
    tasksCompleted: false,
    index: 3,
  },
];

let display = ' ';
const populateHtml = (item) => {
  item.forEach((elem) => {
    display += `
    <div class="todo-tick flex">
    <div class="checkbox">
      <input
        type="checkbox"
        id="to-do-check"
        name="To-Do"
        value="Add"
      />
      <label for="todo">${elem.description}</label><br/>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>
  <hr />`;
  });
  InnerTodo.innerHTML = display;
};
populateHtml(ToDo);
