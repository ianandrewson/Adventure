export const checkDeathOrWin = (user) => {
    let newWindowLocation = window.location.href;
    if (user.health === 0) {
        newWindowLocation = '../results/';
    }

    return newWindowLocation;
};