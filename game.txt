document.addEventListener('keydown', moveSpacefox);

function moveSpacefox(event) {
    const spacefox = document.getElementById('spacefox');
    let position = spacefox.offsetTop;

    if (event.key === 'ArrowUp') {
        if (position > 0) {
            spacefox.style.top = (position - 50) + 'px';
        }
    }

    if (event.key === 'ArrowDown') {
        if (position < 750) {
            spacefox.style.top = (position + 50) + 'px';
        }
    }
}
