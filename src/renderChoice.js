export const renderChoice = (questChoice) => {
    const choice = document.createElement('label');

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'choice';
    radioInput.value = questChoice.id;
    choice.appendChild(radioInput);
    
    const description = document.createElement('p');
    description.textContent = questChoice.description;
    choice.appendChild(description);
    return choice;
};