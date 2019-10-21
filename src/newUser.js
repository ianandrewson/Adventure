import { saveUser } from './saveUser.js';

export const newUser = (formData) => {
    const user = {
        name: formData.get('name'),
        occupation: formData.get('occupation'),
        ship: formData.get('ship'),
        health: 50,
        fuel: 60,
        standing: 0,
        credits: 0,
        completed: {}
    };
    saveUser(user);
    localStorage.setItem('current-user', `${user.name}`);
    return user;
};