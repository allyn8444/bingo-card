function generateBingoCard() {
    const grid = document.querySelector('.bingo-grid');
    const columns = ['B', 'I', 'N', 'G', 'O'];
    const ranges = {
        'B': [1, 15],
        'I': [16, 30],
        'N': [31, 45],
        'G': [46, 60],
        'O': [61, 75]
    };

    // Generate numbers for each column
    const columnNumbers = {};
    columns.forEach(letter => {
        const [min, max] = ranges[letter];
        columnNumbers[letter] = getRandomNumbers(min, max, 5);
    });

    // Create grid by rows
    for (let row = 0; row < 5; row++) {
        columns.forEach(letter => {
            const cell = document.createElement('div');
            cell.className = 'bingo-number';

            // Set FREE space in center
            if (letter === 'N' && row === 2) {
                cell.textContent = 'FREE';
                cell.classList.add('marked');
            } else {
                cell.textContent = columnNumbers[letter][row];
            }

            cell.addEventListener('click', () => {
                cell.classList.toggle('marked');
            });

            grid.appendChild(cell);
        });
    }
}

function getRandomNumbers(min, max, count) {
    const numbers = [];
    while (numbers.length < count) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers.sort((a, b) => a - b);  // Sort numbers in ascending order
}

function clearGrid() {
    const grid = document.querySelector('.bingo-grid');
    grid.innerHTML = '';
}

// Initial card generation
document.addEventListener('DOMContentLoaded', generateBingoCard);

// New card generation button handler
document.getElementById('generate-card').addEventListener('click', () => {
    clearGrid();
    generateBingoCard();
});