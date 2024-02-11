document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'flex';
    initMemoryGame();
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert('Hello Kitty believes in love! Try again!');
});

document.getElementById('completeGames').addEventListener('click', function() {
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('loveExpressionContainer').style.display = 'flex';
});

document.getElementById('submitLove').addEventListener('click', function() {
    const loveMessage = document.getElementById('loveMessage').value;
    alert('Your love message: ' + loveMessage);
});

function initMemoryGame() {
    const memoryGameContainer = document.getElementById('memoryGameContainer');
    const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.innerText = card;
        cardElement.classList.add('memory-card');
        memoryGameContainer.appendChild(cardElement);
    });
}

// Note: This is a very basic setup. You would need to add event listeners to the cards for flipping and matching logic.
