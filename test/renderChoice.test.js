// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { renderChoice } from '../src/renderChoice.js';
import { quests } from '../data/quest-data.js';

const test = QUnit.test;

test('should return a Quest choice to render to screen', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = '<label><input type="radio" name="choice" value="accelerate"><p>Hit the thrusters to accelerate towards the base and charge your weapons to open fire on the courtyard</p></label>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderChoice(quests[0].choices[0]);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.outerHTML, expected);
});
