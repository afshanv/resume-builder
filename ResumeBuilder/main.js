var skill = document.getElementById('skill');
var showButton = document.getElementById('show');
var hideButton = document.getElementById('hide');
skill.style.display = 'block';
showButton.style.display = 'none';
showButton.addEventListener('click', function () {
    skill.style.display = 'block';
    showButton.style.display = 'none';
    hideButton.style.display = 'inline';
});
hideButton.addEventListener('click', function () {
    skill.style.display = 'none';
    showButton.style.display = 'inline';
    hideButton.style.display = 'none';
});
