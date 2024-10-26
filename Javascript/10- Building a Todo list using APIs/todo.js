const tasks = []; // array of objects
const taskList = document.getElementById('list'); // list of items
const addTaskInput = document.getElementById('add'); // value of to do input
const tasksCounter = document.getElementById('tasks-counter'); // total tasks added
var count = 0;


function markTaskAsComplete (taskId) {
    showNotification('Task Toggled Successfully');

}

function deleteTask (taskId) {
    count--;
    console.log(taskId.parentElement);
    taskId.parentElement.remove();
    tasksCounter.innerText=count;
    showNotification('Deleted The Task');
}

function addTask (task) {
    count++;
    let id_att= "task";
    id_att = id_att+count;
    let str = '<input type="checkbox" id='+id_att+' data-id="12" class="custom-checkbox"> <label for='+id_att+'>'+task+'</label> <i class="fa-solid fa-trash delete"></i>';
    let li_element = document.createElement('li');
    li_element.innerHTML=str;
    let list_tag = document.getElementById('list');
    list_tag.appendChild(li_element);
    let inp = document.getElementById('add');
    inp.value='';
    tasksCounter.innerText=count;
    let del = document.getElementsByClassName('delete');
    let toggle = document.getElementsByClassName('custom-checkbox');
    del[count-1].addEventListener('click',(event)=>{
            deleteTask(event.target);
        });
    toggle[count-1].addEventListener('click',(e)=>{
        markTaskAsComplete(e);
    })
}

function showNotification(text) {
    alert(text);
}

function handleInput(e){
    if(e.key=='Enter'){
        let inp = document.getElementById('add');
        addTask(inp.value);
        showNotification('Added the Task');
    }
}

addTaskInput.addEventListener('keypress',handleInput);


