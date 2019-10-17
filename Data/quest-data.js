const mars = {
    ID: 'mars',
    TITLE: 'Explore Mars',
    MAP: {
        top: '23%',
        left: '78%'
    },
    IMAGE: 'mars.jpg',
    AUDIO: null,
    ACTION: null,
    DESCRIPTION: 'As you descend through the atmosphere, a barren red expanse stretches in all directions around. A small military base swiriling in dust rushes towards you as your ship glows from re-entry. You notice smoke swirling from the westernmost wall, and small figures running around a central training courtyard. What do you do?',
    CHOICES: [{
        ID: 'accelerate',
        DESCRIPTION: 'Hit the thrusters to accelerate towards the base and charge your weapons to open fire on the courtyard',
        RESULT: '', 
        CONSEQUENCES: [{
            fuel: '-10',
            health: '-20',
            standing: '-20',
            credits: '500'
        }]
    }, {
        ID: 'inquire',
        DESCRIPTION: 'Land on the outskirts of the base and cautiously approach to get a better idea of what is going on',
        RESULT: 'As your door slowly opens, you keep your hand on your weapon holster, ready to fire at any moment. You see a woman wildly pointing around the courtyard, yelling over the comms. A fire in the supply depot caused a large explosion. You stay outside of the base, choosing to walk its perimeter and pick up small caches of scattered supplies ', 
        CONSEQUENCES: [{
            fuel: '0',
            health: '15',
            standing: '0',
            credits: '200'
        }]
    }, {
        ID: 'help',
        DESCRIPTION: 'Fly towards the smoke and use your polymer foam cannon to squelch the chemical fire.',
        RESULT: 'As your foam continues to expand and consume the fire, your door opens and you emerge with your hands on your hips. The captain of the base rushes towards you, subordinates in toe. "Thank you so much!" she says. You saved the base and are rewarded for your efforts.', 
        CONSEQUENCES: [{
            fuel: '0',
            health: '0',
            standing: '20',
            credits: '100'
        }]
    }]
};

const moon = {
    ID: 'moon',
    TITLE: 'Federation and Alliance Negotiation Summit',
    MAP: {
        top: '46%',
        left: '58%'
    },
    IMAGE: 'moon.jpg',
    AUDIO: null,
    ACTION: null,
    DESCRIPTION: 'The Federation of Terrestrial Govnernments is holding a round of negotiations with the Space Labor Alliance. Workers are upset over brutal working conditions in outer space and a very high mortaility rate with little compensation. Upon landing at the Congressional Earth Annex Forum, you enter the main hall to see two sides screaming at each other.',
    CHOICES: [{
        ID: 'aid-gov',
        DESCRIPTION: 'Begin pushing and shoving your way in to the crowd of space laborers, causing as much of a ruckus as possible along the way.',
        RESULT: 'You make your way towards a burly middle aged man on a central platform. The workers around you yell in protest as you shove your way through the crowd. By the time you make it to him, small fights are starting to break out throughout the crowd. You get to the platform and punch the leader in the face as the room descends into chaos. The marhalls disperse the crowd, winking at you in passing while some credits are shoved into your hands.', 
        CONSEQUENCES: [{
            fuel: '0',
            health: '-5',
            standing: '20',
            credits: '200'
        }]
    }, {
        ID: 'aid-labor',
        DESCRIPTION: 'Place small explosive charges throughout the crowd on the government side of the room in an attempt to kill as many officials as possible',
        RESULT: 'Screams fill the hall as dozens of state officials writhe in agony on the floor clutching severe burns. A few bodies litter the hall, charred military medals smoldering on flaming uniforms. Cheers rise up from the Space Labor Alliance as the prime minister announces concession and promises to improve pay and working conditions.', 
        CONSEQUENCES: [{
            fuel: '0',
            health: '0',
            standing: '-50',
            credits: '0'
        }]
    }, {
        ID: 'neutral',
        DESCRIPTION: 'Turn around and start looting offices',
        RESULT: 'The hallways echo the commotion coming from the main hall. You make your way from office to office, taking valuables along the way and finding a few interesting memos useful for blackmail. On the way out, a security guard notices you and yells at you to halt. You get into a scuffle and get ruthlessly beaten by his plasma batton. You barely manage to escape with your newfound possesions to tend to your wounds.', 
        CONSEQUENCES: [{
            fuel: '0',
            health: '-30',
            standing: '-10',
            credits: '200'
        }]
    }]
};

const venus = {
    ID: 'venus',
    TITLE: 'Odd Jobs on Venus',
    MAP: {
        top: '12%',
        left: '76%'
    },
    IMAGE: '.jpg',
    AUDIO: null,
    ACTION: null,
    DESCRIPTION: 'A slew of messages appears on your HUD with a few jobs to do around Venus before a solar storm isolates the planet for a few weeks. The storm is fast approaching, leaving you with time enough for only a single job. Already, the Venus atmoshphere is glowing with strange aura from the encroaching radiation.',
    CHOICES: [{
        ID: 'water',
        DESCRIPTION: 'The orbiting space station is well shielded from the radiation, but its water supplies are dwindling. The station is asking to use your electrolytic converter to help replenish some of its supplies.',
        RESULT: 'The station pays you well for the precious water. They also bolster your shields to help you deal with the radiation as you leave the station.', 
        CONSEQUENCES: [{
            fuel: '-20',
            health: '20',
            standing: '0',
            credits: '200'
        }]
    }, {
        ID: 'bounty',
        DESCRIPTION: 'A top ten wanted criminal of the galaxy is known to be in hiding on Venus. His location is pinging on your radar, and his ship appears to be powered down.',
        RESULT: 'The ping was a trap! The criminal had a gang of supporters in hiding with him, and they were armed to the teeth. After an intense firefight, the wreckage disperses, revealing a range of supplies. Unfortunately, your ship sustains heavy damages. After recovering the criminal\'s black box, you sputter back towards earth leaving a trail of sparks and debris.', 
        CONSEQUENCES: [{
            fuel: '-10',
            health: '-30',
            standing: '20',
            credits: '500'
        }]
    }, {
        ID: 'gas',
        DESCRIPTION: 'The Space Labor Alliance is asking you to harvest some unique gases from the atmosphere of Venus for weapons against the Federation of Terrestrial Governments. A federation patrol is in the area gaurding the precious gases, but your stealth drive should be enough to prevent your detection.',
        RESULT: 'You manage to succesfully harvest the gases without being detected. Unfortunately, the gases require a special containment field, draining large parts of your fuel reserve. Hopefully you can make it back to Earth ok.', 
        CONSEQUENCES: [{
            fuel: '-40',
            health: '0',
            standing: '-20',
            credits: '300'
        }]
    }]
};

export const quests = [mars, moon, venus];
