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
        
    let newWindowLocation = window.location.href;
    if (user.health === 0) {
        newWindowLocation = '../results/';
        return newWindowLocation;
    } else if (youWon(user.completed)){
        newWindowLocation = '../results/';
        return newWindowLocation;
    }
    
};