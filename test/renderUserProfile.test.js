// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { renderUserProfile } from '../src/renderUserProfile.js';


const test = QUnit.test;

test('Should return quest link', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let user = {
        name: 'Ian',
        occupation: 'Water Reclaimation Specialist',
        ship: 'Scout',
        health: 50,
        fuel: 60,
        standing: 0,
        credits: 0,
        completed: {}
    };

    const expected = '<section><p id="name">Ian</p><p id="occupation">"Water Reclaimation Specialist"</p><p id="ship">Scout</p><p id="health">50</p><p id="fuel">60</p><p id="standing">0</p><p id="credits">0</p></section>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderUserProfile();

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});
