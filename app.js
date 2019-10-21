import { newUser } from './src/newUser.js';

const submitNewUser = document.getElementById('new-user');

submitNewUser.addEventListener('submit', (event) => {
    event.preventDefault();
    const userData = new FormData(submitNewUser);
    newUser(userData);
    window.location = 'map';
});

const loadButton = document.getElementById('load');
loadButton.addEventListener('click', (e) => {
    const user = document.getElementById('load-user').value;
    e.preventDefault();
    if (localStorage.getItem(`${user}`)) {
        localStorage.setItem('current-user', `${user}`);
        window.location = 'map';
    } else {
        document.getElementById('no-load').textContent = 'No such profile was found, please try again';
    }
});