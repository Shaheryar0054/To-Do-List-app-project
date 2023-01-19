import display from './methods.js';

export default class Interactive {
    static changeCompletedListCheck = (statusCheck, id) => {
      const toDoLists = display.getToDoListFromStorage();
      toDoLists[id].completed = statusCheck;
      display.addListToStorage(toDoLists);
      display.showLists();
    }

    // checkbox status
    static checkStatusEvent = () => (
      document.querySelectorAll('.checkbox').forEach((checkbox) => checkbox.addEventListener('change', () => {
        let statusCheck;
        let id;
        if (checkbox.id > 0) {
          id = checkbox.id - 1;
        } else {
          id = 0;
        }

        if (checkbox.checked === true) {
          statusCheck = true;
        } else if (checkbox.checked !== true) {
          statusCheck = false;
        }

        this.changeCompletedListCheck(statusCheck, id);
      }))
    )

    static clearCompletedToDoLists = () => {
      let toDoLists = display.getToDoListFromStorage();

      toDoLists = toDoLists.filter((item) => item.completed !== true);
      display.newIndexNum(toDoLists);
      display.addListToStorage(toDoLists);
      display.showLists();
    }
}