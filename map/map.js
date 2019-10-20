import { generateQuestLink } from '../src/generateQuestLink.js';
import { quests } from '../data/quest-data.js';
import { loadProfile } from '../src/loadProfile.js';
import { checkDeathOrWin } from '../src/checkDeathOrWin.js';

let user = loadProfile();

if (checkDeathOrWin(user)){
    window.location = '../results';
}

const mapArea = document.getElementById('map');

quests.forEach(quest => {
    mapArea.appendChild(generateQuestLink(quest));
});