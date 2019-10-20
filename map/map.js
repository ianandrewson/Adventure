import { generateQuestLink } from '../src/generateQuestLink.js';
import { quests } from '../data/quest-data.js';

const currentUser = (localStorage.getItem('current-user'));
const user = JSON.parse(localStorage.getItem(currentUser));

//loadProfile(user);

const mapArea = document.getElementById('map');

quests.forEach(quest => {
    mapArea.appendChild(generateQuestLink(quest));
});