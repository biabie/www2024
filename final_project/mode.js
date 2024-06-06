document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');

    const currentMode = localStorage.getItem('mode');
    if (currentMode) {
        document.body.classList.add(currentMode);
    }

    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        } else {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        }
    });
});