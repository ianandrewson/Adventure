import { generateQuestLink } from '../src/generateQuestLink.js';
import { quests } from '../data/quest-data.js';
import { renderUserProfile } from '../src/renderUserProfile.js';

const currentUser = (localStorage.getItem('current-user'));
const user = JSON.parse(localStorage.getItem(currentUser));

const userProfileArea = document.getElementById('user-profile-area');
userProfileArea.appendChild(renderUserProfile(user));
//loadProfile(user);

const mapArea = document.getElementById('map');

quests.forEach(quest => {
    mapArea.appendChild(generateQuestLink(quest));
});