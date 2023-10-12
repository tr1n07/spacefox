document.addEventListener('keydown', moveSpacefox);

let lives = 3;
updateLivesDisplay();

function moveSpacefox(event) {
    const spacefox = document.getElementById('spacefox');
    let position = spacefox.offsetLeft;

    if (event.key === 'ArrowLeft' && position > 0) {
        spacefox.style.left = (position - 50) + 'px';
    }

    if (event.key === 'ArrowRight' && position < 750) {
        spacefox.style.left = (position + 50) + 'px';
    }
}

setInterval(createAsteroid, 2000);

function createAsteroid() {
    const gameContainer = document.getElementById('game-container');
    const asteroid = document.createElement('div');
    asteroid.className = 'asteroid';
    asteroid.style.left = `${Math.floor(Math.random() * 750)}px`;
    gameContainer.appendChild(asteroid);

    const moveAsteroid = setInterval(() => {
        asteroid.style.top = (asteroid.offsetTop + 10) + 'px';

        if (asteroid.offsetTop > 600) {
            asteroid.remove();
            clearInterval(moveAsteroid);
        }

        const spacefox = document.getElementById('spacefox');
        if (isColliding(asteroid, spacefox)) {
            asteroid.remove();
            clearInterval(moveAsteroid);
            loseLife();
        }
    }, 100);
}

function isColliding(div1, div2) {
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();
    
    return !(rect1.top > rect2.bottom || 
             rect1.right < rect2.left || 
             rect1.bottom < rect2.top || 
             rect1.left > rect2.right);
}

function loseLife() {
    lives--;
    updateLivesDisplay();
    if (lives === 0) {
        document.getElementById('game-over').style.display = 'block';
    }
}

function updateLivesDisplay() {
    document.getElementById('lives').textContent = '♥'.repeat(lives);
}
