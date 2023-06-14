const btn = document.getElementById("btn");
const todosDiv = document.getElementsByClassName("todos")[0];

btn.addEventListener("click", () => {
  console.log("clicked");
  const newTodo = document.createElement("p");
  const todo = document.createTextNode("test entry successful!");
  const newButton = document.createElement("button");
  const btnText = document.createTextNode("DEL");
  newTodo.appendChild(todo);
  newButton.appendChild(btnText);
  todosDiv.appendChild(newTodo);
  todosDiv.appendChild(newButton);
});
