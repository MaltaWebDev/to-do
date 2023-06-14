const btn = document.getElementById("btn");
const todosDiv = document.getElementById("todos");
const input = document.getElementById("todo");

btn.addEventListener("click", () => {
  const newToDoDiv = document.createElement("div");
  const newParagraph = document.createElement("p");
  const todoText = document.createTextNode(input.value);
  const newButton = document.createElement("button");

  newParagraph.appendChild(todoText);
  newButton.textContent = "Delete";
  newButton.className = "delete";

  newToDoDiv.appendChild(newParagraph);
  newToDoDiv.appendChild(newButton);

  todosDiv.appendChild(newToDoDiv);
  input.value = "";
});

todosDiv.addEventListener("click", (evt) => {
  if (evt.target.className === "delete") {
    evt.target.parentElement.remove();
  }
});
