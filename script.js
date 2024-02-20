window.addEventListener('mousemove', function(e) {
    const arr = [1, 0.9, 0.8, 0.5, 0.2];

    arr.forEach(function(i) {
        var x = (1 - i) * 75;
        var star = document.createElement('div');

        star.className = 'star';
        star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.backgroundColor = getRandomColor();

        document.body.appendChild(star);

        window.setTimeout(function() {
            document.body.removeChild(star);
        }, Math.round(Math.random() * i * 550));
    });
}, false);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
