
let IdCounter = 0;
const input = document.querySelector('input[type="text"]');

userInput.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask();
});

let addTask = () => {
  IdCounter++;
  let newValue = input.value
  list.innerHTML += `<div class="task-container" id="${IdCounter}">
  <section class="check-container">
      <input type="checkbox" class="check">
      <label>
       ${newValue}
      </label>
      </section>
      <img src="img/eliminar.png" class="close">
    </div>`
  input.value = '';
  updateStats();
};

list.addEventListener('click', (event) => {
  if (event.srcElement.nodeName == 'INPUT') {
    updateStats();
  } else if (event.srcElement.nodeName == 'IMG') {
    deleteTask(event.srcElement.parentNode.id);
  }
})

let updateStats = () => {
  let check = list.querySelectorAll('input[type="checkbox"]:checked');
  let element = list.querySelectorAll('div');
  stats.innerHTML = `<p>Tareas pendientes: ${element.length}     
      Completadas:   ${check.length}</p>`
}

let deleteTask = (id) => {
  let taskToDelete = document.getElementById(id);
  list.removeChild(taskToDelete);
  updateStats()

}
