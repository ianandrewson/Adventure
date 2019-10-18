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
    localStorage.setItem(user.name, JSON.stringify(user));
    return user;
};