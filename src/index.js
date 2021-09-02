document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    let taskDescription = document.getElementById("new-task-description").value;
    let taskList = document.getElementById("tasks");
    let newListItem = document.createElement("li");
    newListItem.innerHTML = taskDescription;
    taskList.appendChild(newListItem);
    event.preventDefault();
  })
});
