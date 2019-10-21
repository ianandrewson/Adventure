// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { newUser } from '../src/newUser.js';

const test = QUnit.test;

test('should return a user Object of specified form', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'Ian');
    formData.set('occupation', 'Water Reclaimation Specialist');
    formData.set('ship', 'Scout');

    const expected = {
        name: 'Ian',
        occupation: 'Water Reclaimation Specialist',
        ship: 'Scout',
        health: 50,
        fuel: 60,
        standing: 0,
        credits: 0,
        completed: {}
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const result = newUser(formData);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});
