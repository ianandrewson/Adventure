// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { renderUserProfile } from '../src/renderUserProfile.js';


const test = QUnit.test;

test('Should return html for user profile', function(assert) {
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

    const expected = '<section><p id="name">Name: Ian</p><p id="occupation">Occupation: Water Reclaimation Specialist</p><p id="ship">Ship type: Scout</p><p id="health">Health: 50</p><p id="fuel">Fuel: 60</p><p id="standing">Standing: 0</p><p id="credits">Credits: 0</p></section>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderUserProfile(user);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result.outerHTML, expected);
});
