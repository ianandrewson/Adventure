import { newUser } from './src/newUser.js';

const submitUser = document.getElementById('submit-user');

submitUser.addEventListener('submit', (event) => {
    event.preventDefault();
    const userData = new FormData(submitUser);
    newUser(userData);
    window.location = 'map';
});
