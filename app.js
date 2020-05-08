// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task')

// loadEventListner()

// function loadEventListner() {
//     form.addEventListener('submit', addTask)
//     taskList.addEventListener('click', removeTask)
//     clearBtn.addEventListener('click', clearTask)
//     filter.addEventListener('keyup', filterTask)
//     document.addEventListener('DOMContentLoaded', getTasks)
// }

// function getTasks(){
//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];

//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'))
//     }
//    tasks.forEach((task)=>{

//     const li = document.createElement('li')
//         li.className = 'collection-item';
//         li.textContent = task
//         const link = document.createElement('a')
//         link.className = 'delete-item secondary-content'
//         link.innerHTML = '<i class="fa fa-remove"></i>'
//         li.appendChild(link)
//         taskList.appendChild(li)

//    });

// }

// function addTask(e) {
//     if (taskInput.value === '') {
//         alert("add some data")
//     } else {
//         const li = document.createElement('li')
//         li.className = 'collection-item';
//         li.textContent = taskInput.value
//         const link = document.createElement('a')
//         link.className = 'delete-item secondary-content'
//         link.innerHTML = '<i class="fa fa-remove"></i>'
//         li.appendChild(link)
//         taskList.appendChild(li)

//         storeTaskInLocalStorage(taskInput.value)

//         taskInput.value = '';

//     }

//     e.preventDefault()
// };

// function storeTaskInLocalStorage(task) {
//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];

//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'))
//     }
//     tasks.push(task)
//     localStorage.setItem('tasks', JSON.stringify(tasks))
// }

// function removeTask(e) {
//     if (e.target.parentElement.classList.contains('delete-item')) {
//         if (confirm("Do you want to delete")) {
//             e.target.parentElement.parentElement.remove()


//             removeTaskFromLocalStorage(e.target.parentElement.parentElement)
//         }
//     }
// }


// function removeTaskFromLocalStorage(taskItem){
//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];

//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'))
// }
//         tasks.forEach((task, index)=>{
//             if (taskItem.textContent === task){
//                 tasks.splice(index, 1);
//             }
//         })
//         localStorage.setItem('tasks', JSON.stringify(tasks))
// }

// function clearTask(e) {
//     // taskList.innerHTML = ''
//     while (taskList.firstChild) {
//         taskList.removeChild(taskList.firstChild)
//     }
//     clearTaskFromLocalStorage()
// }

// function clearTaskFromLocalStorage(){
//     localStorage.clear();
// }

// function filterTask(e) {
//     const text = e.target.value.toLowerCase()
//     console.log("text::", text)
//     document.querySelectorAll('.collection-item').forEach(
//         function (task) {
//             const item = task.firstChild.textContent;
//             console.log("item::", item)
//             if (item.toLowerCase().indexOf(text) != -1) {
//                 task.style.display = 'block'
//             } else {
//                 task.style.display = 'none'
//             }


//         }
//     );
// }

const form = document.querySelector('form')
const taskInput = document.querySelector('#task')
const taskList = document.querySelector('.collection')
const filter = document.querySelector('#filter')
const clearBtn = document.querySelector('.clear-tasks') 


loadEventListner()

function loadEventListner(){
    form.addEventListener('submit',addTask)
    taskList.addEventListener('click', removeTask)
    clearBtn.addEventListener('click', clearTask)
    filter.addEventListener('keyup', filterTaskList)
    document.addEventListener('DOMContentLoaded',getTasks)
}

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task)=>{
        const li = document.createElement('li')
        li.className = 'collection-item';
        li.textContent = task;
        // console.log(li.textContent)
        
        const link = document.createElement('a')
        link.className = 'delete-item secondary-content'
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link)

        taskList.appendChild(li)
    })
} 

function addTask(e){
    if (taskInput.value === ''){
        alert("Nothing to post")
    } else{
        const li = document.createElement('li')
        li.className = 'collection-item';
        li.textContent = taskInput.value;
        // console.log(li.textContent)
        
        const link = document.createElement('a')
        link.className = 'delete-item secondary-content'
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link)

        taskList.appendChild(li)

        storeTaskInLocalStorage(taskInput.value)
        taskInput.value = ''        
       
    }

    
    e.preventDefault()
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    // console.log(tasks);
    

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        alert("Are You sure")
        e.target.parentElement.parentElement.remove()

        removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }

    e.preventDefault()
};

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task,index)=>{
        if (taskItem.textContent===task){
            tasks.splice(index,1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


function clearTask(e){
    
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    e.preventDefault()
}

function filterTaskList(e){
    const text = e.target.value.toLowerCase()   
    document.querySelectorAll('.collection-item').forEach((task)=>{
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block'
        }else{
            task.style.display = 'none'
        }
        
    })
    
    
}
