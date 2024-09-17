const button = document.getElementById('moving-button');

button.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});