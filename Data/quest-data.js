const mars = {
    id: 'mars',
    title: 'Explore Mars',
    map: {
        top: '23%',
        left: '18%'
    },
    image: 'mars.jpg',
    audio: null,
    action: null,
    description: 'As you descend through the atmosphere, a barren red expanse stretches in all directions around. A small military base swiriling in dust rushes towards you as your ship glows from re-entry. You notice smoke swirling from the westernmost wall, and small figures running around a central training courtyard. What do you do?',
    choices: [{
        id: 'accelerate',
        description: 'Hit the thrusters to accelerate towards the base and charge your weapons to open fire on the courtyard',
        result: 'Soldiers fall to the ground, writhing in agony as your plasma turret tears off limbs and ruptures space suits. The captain manages to get a message out to the Federation of Terrestrial Governments before succumbing to her wounds. The outpost\'s automated defenses manage to give you a glancing shot, slightly damaging your port-side wing, but it\'s nothing too serious. You scour the base for supplies, filling your hull with military grade weapons before retuning to space.',
        consequences: [{
            fuel: '-10',
            health: '-20',
            standing: '-20',
            credits: '500'
        }]
    }, {
        id: 'inquire',
        description: 'Land on the outskirts of the base and cautiously approach to get a better idea of what is going on',
        result: 'As your door slowly opens, you keep your hand on your weapon holster, ready to fire at any moment. You see a woman wildly pointing around the courtyard, yelling over the comms. A fire in the supply depot caused a large explosion. You stay outside of the base, choosing to walk its perimeter and pick up small caches of scattered supplies ', 
        consequences: [{
            fuel: '0',
            health: '15',
            standing: '0',
            credits: '200'
        }]
    }, {
        id: 'help',
        description: 'Fly towards the smoke and use your polymer foam cannon to squelch the chemical fire.',
        result: 'As your foam continues to expand and consume the fire, your door opens and you emerge with your hands on your hips. The captain of the base rushes towards you, subordinates in toe. "Thank you so much!" she says. You saved the base and are rewarded for your efforts.', 
        consequences: [{
            fuel: '0',
            health: '0',
            standing: '20',
            credits: '100'
        }]
    }]
};

const moon = {
    id: 'moon',
    title: 'Federation and Alliance Negotiation Summit',
    map: {
        top: '46%',
        left: '88%'
    },
    image: 'moon.jpg',
    audio: null,
    action: null,
    description: 'The Federation of Terrestrial Govnernments is holding a round of negotiations with the Space Labor Alliance. Workers are upset over brutal working conditions in outer space and a very high mortaility rate with little compensation. Upon landing at the Congressional Earth Annex Forum, you enter the main hall to see two sides screaming at each other.',
    choices: [{
        id: 'aid-gov',
        description: 'Begin pushing and shoving your way in to the crowd of space laborers, causing as much of a ruckus as possible along the way.',
        result: 'You make your way towards a burly middle aged man on a central platform. The workers around you yell in protest as you shove your way through the crowd. By the time you make it to him, small fights are starting to break out throughout the crowd. You get to the platform and punch the leader in the face as the room descends into chaos. The marhalls disperse the crowd, winking at you in passing while some credits are shoved into your hands.', 
        consequences: [{
            fuel: '0',
            health: '-5',
            standing: '20',
            credits: '200'
        }]
    }, {
        id: 'aid-labor',
        description: 'Place small explosive charges throughout the crowd on the government side of the room in an attempt to kill as many officials as possible',
        result: 'Screams fill the hall as dozens of state officials writhe in agony on the floor clutching severe burns. A few bodies litter the hall, charred military medals smoldering on flaming uniforms. Cheers rise up from the Space Labor Alliance as the prime minister announces concession and promises to improve pay and working conditions.', 
        consequences: [{
            fuel: '0',
            health: '0',
            standing: '-50',
            credits: '0'
        }]
    }, {
        id: 'neutral',
        description: 'Turn around and start looting offices',
        result: 'The hallways echo the commotion coming from the main hall. You make your way from office to office, taking valuables along the way and finding a few interesting memos useful for blackmail. On the way out, a security guard notices you and yells at you to halt. You get into a scuffle and get ruthlessly beaten by his plasma batton. You barely manage to escape with your newfound possesions to tend to your wounds.',
        consequences: [{
            fuel: '0',
            health: '-30',
            standing: '-10',
            credits: '200'
        }]
    }]
};

const venus = {
    id: 'venus',
    title: 'Odd Jobs on Venus',
    map: {
        top: '82%',
        left: '36%'
    },
    image: '.jpg',
    audio: null,
    action: null,
    description: 'A slew of messages appears on your HUD with a few jobs to do around Venus before a solar storm isolates the planet for a few weeks. The storm is fast approaching, leaving you with time enough for only a single job. Already, the Venus atmoshphere is glowing with strange aura from the encroaching radiation.',
    choices: [{
        id: 'water',
        description: 'The orbiting space station is well shielded from the radiation, but its water supplies are dwindling. The station is asking to use your electrolytic converter to help replenish some of its supplies.',
        result: 'The station pays you well for the precious water. They also bolster your shields to help you deal with the radiation as you leave the station.', 
        consequences: [{
            fuel: '-20',
            health: '20',
            standing: '0',
            credits: '200'
        }]
    }, {
        id: 'bounty',
        description: 'A top ten wanted criminal of the galaxy is known to be in hiding on Venus. His location is pinging on your radar, and his ship appears to be powered down.',
        result: 'The ping was a trap! The criminal had a gang of supporters in hiding with him, and they were armed to the teeth. After an intense firefight, the wreckage disperses, revealing a range of supplies. Unfortunately, your ship sustains heavy damages. After recovering the criminal\'s black box, you sputter back towards earth leaving a trail of sparks and debris.', 
        consequences: [{
            fuel: '-10',
            health: '-30',
            standing: '20',
            credits: '500'
        }]
    }, {
        id: 'gas',
        description: 'The Space Labor Alliance is asking you to harvest some unique gases from the atmosphere of Venus for weapons against the Federation of Terrestrial Governments. A federation patrol is in the area gaurding the precious gases, but your stealth drive should be enough to prevent your detection.',
        result: 'You manage to succesfully harvest the gases without being detected. Unfortunately, the gases require a special containment field, draining large parts of your fuel reserve. Hopefully you can make it back to Earth ok.', 
        consequences: [{
            fuel: '-40',
            health: '0',
            standing: '-20',
            credits: '300'
        }]
    }]
};

export const quests = [mars, moon, venus];
