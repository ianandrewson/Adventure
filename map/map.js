import { generateQuestLink } from '../src/generateQuestLink.js';
import { quests } from '../data/quest-data.js';
import { loadProfile } from '../src/loadProfile.js';

loadProfile();

const mapArea = document.getElementById('map');

quests.forEach(quest => {
    mapArea.appendChild(generateQuestLink(quest));
});