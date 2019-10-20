export const checkDeathOrWin = (user) => {
    

    const youWon = function(userCompletedObject) {
        let keyNum = 0;
        for (const key in userCompletedObject) {
            toString(key);  //this is just to pass linting
            keyNum++;
        }
        if (keyNum === 3){
            return true;
        }};
    
    if (user.health === 0) {
        return true;
    } else if (youWon(user.completed)){
        return true;
    }
};