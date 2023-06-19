// initialise variables
const btn = document.getElementById("btn");
const todosDiv = document.getElementById("todos");
const input = document.getElementById("todo");

// save existing todos to local storage
function saveToLocalStorage() {
  const allToDos = Array.from(todosDiv.children).map((todosDiv) => {
    return todosDiv.textContent.slice(0, -"Delete".length);
  });
  localStorage.setItem("todos", JSON.stringify(allToDos));
}

// get all todos from local storage
function loadFromLocalStorage() {
  const savedToDos = localStorage.getItem("todos");

  if (savedToDos) {
    JSON.parse(savedToDos).forEach((savedToDo) => {
      createAndAppendTodo(savedToDo);
    });
  }
}

// create new todo and append to todosDiv
function createAndAppendTodo(todoText) {
  const newToDoDiv = document.createElement("div");
  const newParagraph = document.createElement("p");
  const todoTextNode = document.createTextNode(todoText);
  const newButton = document.createElement("button");

  newParagraph.appendChild(todoTextNode);
  newButton.textContent = "Delete";
  newButton.className = "delete";

  newToDoDiv.appendChild(newParagraph);
  newToDoDiv.appendChild(newButton);

  todosDiv.appendChild(newToDoDiv);
}

// On click, create and append todo, add to local storage
btn.addEventListener("click", () => {
  const newToDoText = input.value;
  createAndAppendTodo(newToDoText);
  saveToLocalStorage();
  input.value = "";
});

// event delegation
todosDiv.addEventListener("click", (evt) => {
  if (evt.target.className === "delete") {
    evt.target.parentElement.remove();
    saveToLocalStorage();
  }
});

loadFromLocalStorage();
