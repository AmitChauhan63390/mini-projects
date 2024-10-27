document.querySelector("#push").addEventListener("click", () => {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please enter a task");
  } else {
    document.querySelector("#tasks").innerHTML += `<div class="task">
    <span id="taskname">
    ${document.querySelector("#newtask input").value}
    </span>
    <button class="delete">X</button>


        </div>`;
    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0;i<current_tasks.length;i++){
        current_tasks[i].addEventListener("click",function(){
            this.parentElement.remove();
        })
    }

    document.querySelector("#newtask input").value = "";
  }
});
