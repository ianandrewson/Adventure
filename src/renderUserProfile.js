export const renderUserProfile = (user) => {
    const userProfile = document.createElement('section');

    let name = document.createElement('p');
    name.id = 'name';
    name.textContent = 'Name: ' + user['name'];
    userProfile.appendChild(name);

    let occupation = document.createElement('p');
    occupation.id = 'occupation';
    occupation.textContent = 'Occupation: ' + user['occupation'];
    userProfile.appendChild(occupation);

    let ship = document.createElement('p');
    ship.id = 'ship';
    ship.textContent = 'Ship type: ' + user['ship'];
    userProfile.append(ship);

    let health = document.createElement('p');
    health.id = 'health';
    health.textContent = 'Health: ' + user['health'];
    userProfile.appendChild(health);

    let fuel = document.createElement('p');
    fuel.id = 'fuel';
    fuel.textContent = 'Fuel: ' + user['fuel'];
    userProfile.appendChild(fuel);

    let standing = document.createElement('p');
    standing.id = 'standing';
    standing.textContent = 'Standing: ' + user['standing'];
    userProfile.appendChild(standing);

    let credits = document.createElement('p');
    credits.id = 'credits';
    credits.textContent = 'Credits: ' + user['credits'];
    userProfile.appendChild(credits);


    
    return userProfile;
};