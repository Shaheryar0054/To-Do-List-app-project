/* eslint-disable quotes */
const InnerTodo = document.querySelector(".todo-inner-content");
let isEdit = false;
let editId = null;

export default class display {
  // Display list items
  static getTodoList = () => {
    let Todo;
    if (localStorage.getItem("todo") == null) {
      Todo = [];
    } else {
      Todo = JSON.parse(localStorage.getItem("todo"));
    }
    return Todo;
  };

  // function to delete todo
  static addDeleteEvent = () => {
    const trash = document.querySelectorAll(".trash");
    trash.forEach((task, i) => {
      task.addEventListener("click", (ev) => {
        ev.preventDefault();
        this.deleteTodo(i);
      });
    });
  };

  // function to delete todo list
  static deleteTodo = (id) => {
    const toDos = display.getTodoList();
    toDos.splice(id, 1);
    toDos.forEach((item) => {
      if (item.index > id) {
        item.index -= 1;
      }
    });
    localStorage.setItem("todo", JSON.stringify(toDos));
    this.populateTodo(toDos);
  };

  // Function to display html content
  static populateTodo = (item) => {
    let display = " ";
    item.forEach((e, i) => {
      display += `
      <div class="todo-check flex">
      <div class="checkbox">
        <input
          type="checkbox"
          id="to-do-check"
          name="To-Do"
          value="Add" maxlength="10"/>
        <label for="todo">${e.text}</label><br />
      </div>
      <div class= "check-icons">
      <div class="trash">
      <i class="fa-solid fa-trash" id="${i}"></i>
      </div>
      <i class="edit-btn vertical-menu fa-solid fa-ellipsis-vertical" id="${i}"></i>
      </div>
    </div>
    <hr />`;
    });
    InnerTodo.innerHTML = display;
    this.addDeleteEvent();
    this.editTodoListEvent();
  };

  //  Adding todo list
  static addTodoList = () => {
    const text = document.querySelector(".type-task").value;
    if (text !== "") {
      const toDos = display.getTodoList();
      const newInput = { text, completed: false, index: toDos.length };
      const editInput = { text, completed: false, index: editId };

      if (isEdit) {
        const singleTodo = toDos.find((item, index) => index === editId);
        Object.assign(singleTodo, editInput);
        localStorage.setItem("todo", JSON.stringify(toDos));
        this.populateTodo(toDos);
        isEdit = false;
        editId = null;
        document.querySelector(".type-task").value = "";
        return;
      }
      toDos.push(newInput);
      localStorage.setItem("todo", JSON.stringify(toDos));
      this.populateTodo(toDos);
      document.querySelector(".type-task").value = "";
    }
  };

  // Function to edite todolist
  static editTodoList = (id) => {
    const toDos = display.getTodoList();
    const findTodo = toDos.find((item, index) => index === id);
    document.querySelector(".type-task").value = findTodo.text;
    isEdit = true;
    editId = id;
  };

  static editTodoListEvent = () => {
    const editButton = document.querySelectorAll(".edit-btn");
    editButton.forEach((task, i) => {
      task.addEventListener("click", (ev) => {
        ev.preventDefault();
        this.editTodoList(i);
      });
    });
  };
}
