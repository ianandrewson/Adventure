export const updatePlayerStats = (userChoice) => {
    let currentUser = localStorage.getItem('currentUser');
    let user = JSON.parse(localStorage.getItem(currentUser));

    return user;
};