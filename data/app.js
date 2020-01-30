const teachers = {
    id: 'wizard1',
    title: 'game page',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '"https://movement-prod.imgix.net/uploads/32/7178a2e905420c9bce2057820bc30e/upload.jpg?fit=min&h=324&w=576',
    
    description: `
    Professor McGonagall might think it’s an imprecise branch of magic, but Divination does make for a dreamy quiz. Are you ready to see if you could become an oracle?
    `,

const teachers = {
    id: 'wizard2',
    title: 'A Broblem Dragon',
    map: {
        top: '57%',
        left: '20%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
    
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            
        `,
        hp: -35,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'The Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
   
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    monsters, 
    treasure, 
    dragon,
];

export default quests;