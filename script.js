const btn = document.getElementById("btn");
const todosDiv = document.getElementsByClassName("todos")[0];
const input = document.getElementById("todo");

btn.addEventListener("click", () => {
  // console.log("clicked");
  // console.log(input.value);
  const newTodo = document.createElement("p");
  const todo = document.createTextNode(input.value);
  const newButton = document.createElement("button");
  const btnText = document.createTextNode("delete");
  newTodo.appendChild(todo);
  newButton.appendChild(btnText);
  todosDiv.appendChild(newTodo);
  todosDiv.appendChild(newButton);
});
