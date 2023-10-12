document.addEventListener('keydown', moveSpacefox);

function moveSpacefox(event) {
    const spacefox = document.getElementById('spacefox');
    let position = spacefox.offsetLeft;

    if (event.key === 'ArrowLeft') {
        if (position > 0) {
            spacefox.style.left = (position - 50) + 'px';
        }
    }

    if (event.key === 'ArrowRight') {
        if (position < 750) {
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
    setInterval(() => {
        if (position < 600) {
            position += 10;
            asteroid.style.top = position + 'px';
        } else {
            asteroid.remove();
        }
    }, 100);
}
