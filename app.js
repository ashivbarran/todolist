function addItem() {
  let toDoItemValue = document.getElementById("toDoItem").value;

  if (toDoItemValue == "") {
    document.getElementById("message").innerHTML =
      "Enter your task, can't be empty";
    document.getElementById("message").style = "display:block";
  } else {
    document.getElementById("message").style = "display:none";
    let presentListItems = document.getElementById("toDoList").innerHTML;

    let newListItems =
      presentListItems +
      '<li class="list-group-item display-5">' +
      toDoItemValue +
      ' <button onclick="deleteItem(this)" class="text-danger" title="delete this item"><span class="fa fa-trash"></span></button><button onclick="completeItem(this)" class="text-success" title="complete this item"><span class="fa fa-check"></span></button></li>';
    document.getElementById("toDoList").innerHTML = newListItems;

    document.getElementById("toDoItem").value = "";
  }
}

function deleteItem(item) {
  item.parentElement.remove();
}

function completeItem(item) {
  let completedItem = item.parentElement.innerHTML;
  let finished = "<strike>" + completedItem + "</strike>";

  item.parentElement.innerHTML = finished;
}
