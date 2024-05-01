let ul_DOM = document.querySelector('#list');

let tasks = [];

document.addEventListener('DOMContentLoaded', function () {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
});

function newElement(){
    let task = document.getElementById("task").value;

    if(task != ""){
        tasks.push(task); 
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
        renderTasks(); 

        $('#successToast').toast('show');
    }else{
        $('#errorToast').toast('show');
    }
}

function renderTasks() {
    ul_DOM.innerHTML = '';

    tasks.forEach(function (task, index) {
        let li_DOM = document.createElement('li');
        li_DOM.textContent = task;
        ul_DOM.appendChild(li_DOM);

        let span = document.createElement("span");
        span.textContent = "x";
        span.className = "close";
        span.onclick = function () {
            tasks.splice(index, 1); 
            localStorage.setItem('tasks', JSON.stringify(tasks)); 
            renderTasks(); 
        };
        li_DOM.appendChild(span);
    });
}


function removeElement(element) {
    element.parentElement.remove();
  }

