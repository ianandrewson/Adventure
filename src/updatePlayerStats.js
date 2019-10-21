export const updatePlayerStats = (userChoice, questID) => {
    let currentUser = localStorage.getItem('current-user');
    let userProfile = JSON.parse(localStorage.getItem(currentUser));
    
    for (const key in userChoice.consequences) {
        for (const userKey in userProfile){
            if (key === userKey){
                (userProfile[userKey]) += Number(userChoice.consequences[key]);
            }
        }
    }
    userProfile['completed'][questID] = true;
    localStorage.setItem(currentUser, JSON.stringify(userProfile));


    return userProfile;
};