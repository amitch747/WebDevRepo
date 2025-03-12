document.addEventListener('DOMContentLoaded', () => {
    displayTask();
});

let todoList = JSON.parse(localStorage.getItem('todoList'));
if (!todoList) {
    todoList = []
    localStorage.setItem('todoList', JSON.stringify(todoList));
}










function displayTask() {
    let todoListHTML = '';

    todoList.forEach((todo, i) => {
        const { task, deadline } = todo;
        const html = `
        <div>${task}</div>
        <div>${deadline}</div>
        <button class="js-delete"">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('#div-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index,1);
                displayTask();
                localStorage.setItem('todoList', JSON.stringify(todoList));
            });
        });
}



function addTask() {
    const inputElement = document.querySelector('#todo');
    const task = inputElement.value;

    const dateInputElement = document.querySelector('#date');
    const deadline = dateInputElement.value;


    
    if (task === "" || deadline === "") {
        alert("Fill out the fields");
        return;
    }

    todoList.push({
        task,
        deadline
    });
    localStorage.setItem('todoList', JSON.stringify(todoList));

    inputElement.value = '';
    dateInputElement.value = '';

    displayTask();
}

