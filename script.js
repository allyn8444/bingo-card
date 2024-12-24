function generateBingoCard() {
    const grid = document.querySelector('.bingo-grid');
    const numbers = {
        B: getRandomNumbers(1, 15, 5),
        I: getRandomNumbers(16, 30, 5),
        N: getRandomNumbers(31, 45, 5),
        G: getRandomNumbers(46, 60, 5),
        O: getRandomNumbers(61, 75, 5)
    };

    // Make center square free
    numbers.N[2] = 'FREE';

    Object.values(numbers).forEach(column => {
        column.forEach(number => {
            const cell = document.createElement('div');
            cell.className = 'bingo-number';
            cell.textContent = number;
            cell.addEventListener('click', () => {
                cell.classList.toggle('marked');
            });
            grid.appendChild(cell);
        });
    });
}

function getRandomNumbers(min, max, count) {
    const numbers = [];
    while (numbers.length < count) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

// Generate new card button
function clearGrid() {
    const grid = document.querySelector('.bingo-grid');
    grid.innerHTML = '';
}

document.getElementById('generate-card').addEventListener('click', () => {
    clearGrid();
    generateBingoCard();
});


document.addEventListener('DOMContentLoaded', generateBingoCard);