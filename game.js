document.addEventListener('keydown', moveSpacefox);

let lives = 3;
updateLivesDisplay();

function moveSpacefox(event) {
    const spacefox = document.getElementById('spacefox');
    let position = spacefox.offsetLeft;

    if (event.key === 'ArrowLeft') {
        if (position > 0) {
            spacefox.style.left = (position - 50) + 'px';
        }
    }

    if (event.key === 'ArrowRight') {
        if (position < document.getElementById('game-container').offsetWidth - 50) {
            spacefox.style.left = (position + 50) + 'px';
        }
    }
}

setInterval(createAsteroid, 2000);

function createAsteroid() {
    const gameContainer = document.getElementById('game-container');
    const asteroid = document.createElement('div');
    asteroid.innerHTML = '<img src="images/asteroid.png" alt="Asteroid" width="50" height="50">';
    asteroid.style.position = 'absolute';
    asteroid.style.top = '0px';
    asteroid.style.left = `${Math.random() * 750}px`;
    gameContainer.appendChild(asteroid);
    
    let position = 0;
    const asteroidInterval = setInterval(() => {
        if (position < 600) {
            position += 10;
            asteroid.style.top = position + 'px';
            checkCollision(asteroid, asteroidInterval);
        } else {
            asteroid.remove();
            clearInterval(asteroidInterval);
        }
    }, 100);
}

function checkCollision(asteroid, asteroidInterval) {
    const spacefox = document.getElementById('spacefox');
    const rect1 = asteroid.getBoundingClientRect();
    const rect2 = spacefox.getBoundingClientRect();

    if (!(rect1.right < rect2.left || 
          rect1.left > rect2.right || 
          rect1.bottom < rect2.top || 
          rect1.top > rect2.bottom)) {
        asteroid.remove();
        clearInterval(asteroidInterval);
        loseLife();
    }
}

function loseLife() {
    lives--;
    updateLivesDisplay();
    if (lives === 0) {
        document.getElementById('game-over').style.display = 'block';
    }
}

function updateLivesDisplay() {
    document.getElementById('lives-count').innerText = lives;
}
