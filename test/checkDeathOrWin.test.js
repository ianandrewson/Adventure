// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { checkDeathOrWin } from '../src/checkDeathOrWin.js';

const test = QUnit.test;

test('Should return true for win', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const testUser = {
        name: 'Ian',
        occupation: 'Water Reclaimation Specialist',
        ship: 'Scout',
        health: 60,
        fuel: 60,
        standing: 0,
        credits: 0,
        completed: { mars: true, venus: true, moon: true }
    };
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkDeathOrWin(testUser);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('Should return true for loss', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const testUser = {
        name: 'Ian',
        occupation: 'Water Reclaimation Specialist',
        ship: 'Scout',
        health: 0,
        fuel: 60,
        standing: 0,
        credits: 0,
        completed: {}
    };
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkDeathOrWin(testUser);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});