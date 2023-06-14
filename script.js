const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("clicked");
  const newTodo = document.createElement("p");
  const todo = document.createTextNode("test entry successful!");
  const wrapper = document.getElementsByClassName("wrapper")[0];
  newTodo.appendChild(todo);
  wrapper.appendChild(newTodo);
});
