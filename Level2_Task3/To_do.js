function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");
  
    if (taskInput.value === "") {
      alert("Please enter a task");
      return;
    }
  
    var li = document.createElement("li");
    var span = document.createElement("span");
    var taskText = document.createTextNode(taskInput.value);
  
    span.innerHTML = "&times;";
    span.addEventListener("click", function() {
      li.remove();
    });
  
    li.appendChild(span);
    li.appendChild(taskText);
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  