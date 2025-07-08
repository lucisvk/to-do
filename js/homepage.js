document.getElementById("add-list-btn").addEventListener("click", () => {
    const taskLists = document.getElementById("task-lists");
  
    const newList = document.createElement("div");
    newList.className = "list-item";
    newList.contentEditable = true;
    newList.textContent = "New List";
  
    taskLists.appendChild(newList);
  });