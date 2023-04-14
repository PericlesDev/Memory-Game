const grid = document.querySelector('.grid');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className;
    return element;
}

const createCard = (character) => {

    const card = document.createElement('div', 'card');
    const front = document.createElement('div', 'face front');
    const back = document.createElement('div', 'face back');

    front.style.backgroundImage = `url('../image/${character}.png')`;


    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = () => {
    characters.forEach((character) => {

     const card = createCard();
     grid.appendChild(card);

    });
}