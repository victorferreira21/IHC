const apiURL = 'http://localhost:3000/todos';
const membersURL = 'http://localhost:3000/members';

const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');
const memberSelect = document.getElementById('member-select');

const fetchMembers = async () => {
    const response = await fetch(membersURL);
    const members = await response.json();
    renderMembers(members);
};

const renderMembers = (members) => {
    members.forEach(member => {
        const option = document.createElement('option');
        option.value = member.name;
        option.textContent = member.name;
        memberSelect.appendChild(option);
    });
};

const fetchTodos = async () => {
    const response = await fetch(apiURL);
    const todos = await response.json();
    renderTodos(todos);
};

const renderTodos = (todos) => {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${todo.text} (Responsável: ${todo.member})
            <button data-id="${todo.id}" class="btn btn-danger btn-sm">Excluir</button>
        `;
        todoList.appendChild(li);

        li.querySelector('button').addEventListener('click', () => deleteTodo(todo.id));
    });
};

const addTodo = async () => {
    const text = todoInput.value;
    const member = memberSelect.value;
    if (!text || !member) return;

    const newTodo = {
        text: text,
        completed: false,
        member: member
    };

    await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    });

    todoInput.value = '';
    fetchTodos();
};

const deleteTodo = async (id) => {
    await fetch(`${apiURL}/${id}`, {
        method: 'DELETE'
    });
    fetchTodos();
};

addTodoButton.addEventListener('click', addTodo);

fetchMembers();
fetchTodos();
