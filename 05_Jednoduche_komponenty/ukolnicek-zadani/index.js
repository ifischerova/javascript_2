console.log('funguju!');
const tasks = [
    {"id":"qDvUoqve","name":"Vyvenčit psa","due":"za 20 minut","done":false},
    {"id":"4y0N3LIy","name":"Nákoupit na rohlik.cz","due":"za hodinu","done":true},
    {"id":"NhnbZp8P","name":"Zaplatit elektřinu+plyn","due":"za 2 dny","done":false},
    {"id":"aTORG1OP","name":"Vystavit fakturu za poslední měsíc","due":"za 4 hodiny","done":true},
    {"id":"srjYuAda","name":"Studovat JavaScript","due":"dnes večer","done":false},
    {"id":"K1XqnO3J","name":"Zavolat babičce k narozeninám","due":"za 3 dny","done":false},
    {"id":"6ZEqOU7l","name":"Naplánovat dovolenou","due":"za týden","done":false},
    {"id":"AMzdblfD","name":"Uklidit koupelnu","due":"zítra","done":true}
]

const Task = (props) => {
    const { tasks } = props;

    return `
        <div class="task">
            <div class="task__body">
            <div class="task__name">${task.name}</div>
            <div class="task__due">${task.due}</div>
            </div>
            <div class="task__done">${task.done}</div>
        </div>
    `
}

const renderTasks = (tasksList) => {
    const taskToDo = document.querySelector('.todo_tasks');
}
