const questions = [
    {
        type: 'list',
        name: 'image',
        message: '👋 Howdy! Select which shape you would like for your logo.',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shape',
        message: '🍬 Sweet! Type what color you would like your shape to be?',
    },
    {
        type: 'input',
        name: 'text',
        message: '😎 Nice choice! Type up to 3 characters to go onto your logo?',
    },
    {
       type: 'input',
        name: 'colorText',
        message: '🌈 Alright! Type what color you would like your text to be.',
    },
];

module.exports = questions;