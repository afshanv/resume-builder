// toogle btn

const skill = document.getElementById('skill') as HTMLElement;
const showButton = document.getElementById('show') as HTMLButtonElement;
const hideButton = document.getElementById('hide') as HTMLButtonElement;

skill.style.display = 'block';
showButton.style.display = 'none';

// show skills
showButton.addEventListener('click', () => {
    skill.style.display = 'block'
    showButton.style.display = 'none'
    hideButton.style.display = 'inline'
});

// hide skils
hideButton.addEventListener('click', () => {
    skill.style.display = 'none'
    showButton.style.display = 'inline'
    hideButton.style.display = 'none'
});


