import { quests } from '../data/quest-data.js';
import { findById } from '../src/findById.js';
import { renderChoice } from '../src/renderChoice.js';
import { renderQuestResult } from '../src/renderQuestResult.js';
import { updatePlayerStats } from '../src/updatePlayerStats.js';

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const currentQuest = findById(questId, quests);
if (currentQuest === null) {
    window.location = '../';
}

document.getElementById('title').textContent = currentQuest.title;
//document.getElementById('quest-image') = currentQuest.image;
document.getElementById('description').textContent = currentQuest.description;
const choiceArea = document.getElementById('choice-area');
currentQuest.choices.forEach(choice => {
    choiceArea.appendChild(renderChoice(choice));
});

document.getElementById('submit-choice').addEventListener('click', () => {
    document.getElementById('submit-choice').classList.add('hide-me');
    
    const choice = document.querySelector('input:checked').value;
    const choiceMade = findById(choice, currentQuest.choices);
    document.getElementById('result-area').appendChild(renderQuestResult(choiceMade));

    //CALL updatePlayerStats HERE 

    const returnButton = document.createElement('button');
    returnButton.id = 'return-button';
    returnButton.textContent = 'Return to map';
    document.getElementById('result-area').appendChild(returnButton);
    document.getElementById('return-button').addEventListener('click', () =>{
        window.location = '../map/';
    });
});
