function increaseFontSize() {
    let currentSize = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
    currentSize += 2;
    document.body.style.fontSize = currentSize + 'px';
    localStorage.setItem('fontSize', currentSize);
}

function decreaseFontSize() {
    let currentSize = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
    currentSize -= 2;
    document.body.style.fontSize = currentSize + 'px';
    localStorage.setItem('fontSize', currentSize);
}

function resetFontSize() {
    document.body.style.fontSize = '';
    localStorage.removeItem('fontSize');
}

document.addEventListener('DOMContentLoaded', function() {
    const storedFontSize = localStorage.getItem('fontSize');
    if (storedFontSize) {
        document.body.style.fontSize = storedFontSize + 'px';
    }
});

document.getElementById('increaseFontSize').addEventListener('click', increaseFontSize);
document.getElementById('decreaseFontSize').addEventListener('click', decreaseFontSize);
document.getElementById('resetFontSize').addEventListener('click', resetFontSize);