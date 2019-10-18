import { quests } from '../data/quest-data.js';
import { findById } from '../src/findById.js';

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const currentQuest = findById(questId, quests);
if (currentQuest === null) {
    window.location = '../';
};
console.log(currentQuest);