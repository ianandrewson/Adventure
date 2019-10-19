import { quests } from '../data/quest-data.js';
import { findById } from '../src/findById.js';
import { renderChoice } from '../src/renderChoice.js';

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
    renderChoice(choice);
});