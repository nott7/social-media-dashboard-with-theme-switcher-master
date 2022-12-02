const toggle = document.getElementById('toggle');
const switchModeText = document.getElementById('switch__mode');



toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');



    if (document.body.classList.contains('dark-theme')) {
        switchModeText.innerHTML = 'Light';
    } else {
        switchModeText.innerHTML = 'Dark';
    }
});

