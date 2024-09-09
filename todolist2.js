document.addEventListener('DOMContentLoaded', () => {
    const D = document.getElementById('D');
    const E = document.getElementById('E');
    const taskInput = document.getElementById('A');
    // const taskList = document.getElementById('taskList');

    
    function addTask() {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            const li = document.createElement('li');
            let d=document.createElement('button')
            d.style.textContent="Delete";
            d.style.marginLeft='10vw';
            li.append(d);
            taskList.appendChild(li);
            taskInput.value = '';

            
            li.querySelector('.delete-btn').addEventListener('click', function () {
                taskList.removeChild(li);
            });
        } else {
            alert('Please enter a task.');
        }

    D.addEventListener('click', D);

    
    A.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    
    E.addEventListener('click', function () {
        taskList.innerHTML = '';
    });
    }
