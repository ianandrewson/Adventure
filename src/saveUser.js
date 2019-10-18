export const saveUser = (user) => {
    localStorage.setItem(user.name, JSON.stringify(user));
};