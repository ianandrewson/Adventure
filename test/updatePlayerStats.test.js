// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { updatePlayerStats } from '../src/updatePlayerStats.js';
import { quests } from '../data/quest-data.js';

const test = QUnit.test;

test('should return a Quest choice to render to screen', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    localStorage.clear();
    localStorage.setItem('currentUser', 'Ian');
    let storedUser = {
        name: 'Ian',
        occupation: 'Water Reclaimation Specialist',
        ship: 'Scout',
        health: 50,
        fuel: 60,
        standing: 0,
        credits: 0,
        completed: {}
    };
    localStorage.setItem('Ian', JSON.stringify(storedUser));

    const expected = { name: 'Ian', occipation: 'Water Reclaimation Specialist', ship: 'Scout', health: 30, fuel: 50, standing: -20, credits: 500, completed: { mars: true } };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = updatePlayerStats(quests[0].choices[0]);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});
