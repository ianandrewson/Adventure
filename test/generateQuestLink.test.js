// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { generateQuestLink } from '../src/generateQuestLink.js';
import { quests } from '../data/quest-data.js';


const test = QUnit.test;

test('Should return quest link', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = quests[0];
    const expected = '<a class="quest" href="../quest/?id=mars" style="top: 23%; left: 18%;">Explore Mars</a>';



    //Act 
    // Call the function you're testing and set the result to a const
    const result = generateQuestLink(quest);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result.outerHTML, expected);
});
