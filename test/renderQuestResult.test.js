// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { quests } from '../data/quest-data.js';
import { renderQuestResult } from '../src/renderQuestResult.js';

const test = QUnit.test;

test('should return the quest choice result elements to render to screen', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '<article><p>Soldiers fall to the ground, writhing in agony as your plasma turret tears off limbs and ruptures space suits. The captain manages to get a message out to the Federation of Terrestrial Governments before succumbing to her wounds. The outpost\'s automated defenses manage to give you a glancing shot, slightly damaging your port-side wing, but it\'s nothing too serious. You scour the base for supplies, filling your hull with military grade weapons before retuning to space.</p><br><p>fuel: -10</p><p>health: -20</p><p>standing: -20</p><p>credits: 500</p></article>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderQuestResult(quests[0].choices[0]);
    console.log(result);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.outerHTML, expected);
});
