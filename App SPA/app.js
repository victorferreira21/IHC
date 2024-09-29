const apiURL = 'http://localhost:3000/afazeres';
const membersURL = 'http://localhost:3000/members';

const afazerInput = document.getElementById('afazer-input');
const addAfazerButton = document.getElementById('add-afazer');
const afazerList = document.getElementById('afazer-list');
const memberSelect = document.getElementById('member-select');

const fetchMembers = async () => {
    const response = await fetch(membersURL);
    const members = await response.json();
    renderMembers(members);
};

const renderMembers = (members) => {
    memberSelect.innerHTML = '';
    members.forEach(member => {
        const option = document.createElement('option');
        option.value = member.name;
        option.textContent = member.name;
        memberSelect.appendChild(option);
    });
};

const fetchAfazeres = async () => {
    const response = await fetch(apiURL);
    const afazeres = await response.json();
    renderAfazeres(afazeres);
};

const renderAfazeres = (afazeres) => {
    afazerList.innerHTML = '';
    afazeres.forEach(afazer => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${afazer.text} (Responsável: ${afazer.member})
            <button data-id="${afazer.id}" class="btn btn-danger btn-sm">Excluir</button>
        `;
        afazerList.appendChild(li);

        li.querySelector('button').addEventListener('click', () => deleteAfazer(afazer.id));
    });
};

const addAfazer = async () => {
    const text = afazerInput.value;
    const member = memberSelect.value;
    if (!text || !member) return;

    const newAfazer = {
        text: text,
        completed: false,
        member: member
    };

    await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAfazer)
    });

    afazerInput.value = '';
    fetchAfazeres();
};

const deleteAfazer = async (id) => {
    await fetch(`${apiURL}/${id}`, {
        method: 'DELETE'
    });
    fetchAfazeres();
};

addAfazerButton.addEventListener('click', addAfazer);

document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
    fetchAfazeres();
});
