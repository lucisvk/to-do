function createlist() {
    const listContainer = document.getElementById("task-lists");
  
    const newList = document.createElement("li");
    newList.textContent = "New List";
    newList.contentEditable = true;
    newList.classList.add("list-item");
  

    listContainer.appendChild(newList);
  }