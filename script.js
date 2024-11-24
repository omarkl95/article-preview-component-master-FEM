const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const divSocials = document.querySelector('.socials');
const divPersonalInfo = document.querySelector('.personal_info');
const mediaQuery = window.matchMedia('(max-width: 60rem)');
const landscapeQuery = window.matchMedia('(max-width: 60rem) and (orientation: landscape)');

let isToggled = false;

button.addEventListener('click', () => {
    if (mediaQuery.matches && !landscapeQuery.matches) {
        divPersonalInfo.style.display = 'none';
        divSocials.style.display = 'flex';
    } else {
        if (isToggled) {
            divSocials.style.display = 'none';
        } else {
            divSocials.style.display = 'flex';
        }
        isToggled = !isToggled;
    }
});

button2.addEventListener('click', () => {
    if (mediaQuery.matches && !landscapeQuery.matches) {
        divSocials.style.display = 'none';
        divPersonalInfo.style.display = 'flex';
    }
});