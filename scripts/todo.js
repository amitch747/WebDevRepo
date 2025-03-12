const todoList = [{
        task: 'dinner',
        deadline: '2024-12-78'
    }
];


function displayTask() {
    let todoListHTML = '';

    todoList.forEach((todo, i) => {
        const { task, deadline } = todo;
        const html = `
        <div>${task}</div>
        <div>${deadline}</div>
        <button class="js-delete">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('#div-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index,1);
                displayTask();
            });
        });
}



function addTask() {
    const inputElement = document.querySelector('#todo');
    const task = inputElement.value;

    const dateInputElement = document.querySelector('#date');
    const deadline = dateInputElement.value;


    
    if (task === "" || date === "") {
        alert("Fill out the fields");
        return;
    }

    todoList.push({
        task,
        deadline
    });

    inputElement.value = '';
    dateInputElement.value = '';

    displayTask();
}

