const popUp = document.getElementById('pop-up');
const popUpClose = popUp.querySelector('.pop-up__close');
const tariffs = document.querySelectorAll('.tariffs__item');

tariffs.forEach(tariff => {
    tariff.addEventListener('click', clickOnTariff);
});

function clickOnTariff() {
    const tariffContent = this.innerHTML;
    popUp.querySelector('.pop-up__tariff').innerHTML = tariffContent;
    popUp.classList.add('active');
    
    popUpClose.addEventListener('click', closingPopUp);
    popUp.addEventListener('click', clickOutWindowForClose);
}


function closingPopUp() {
    popUp.classList.remove('active');
    popUp.querySelector('.pop-up__tariff').innerHTML = '';
    popUpClose.removeEventListener('click', closingPopUp);
}

function clickOutWindowForClose(event) {
    const target = event.target;
    if(!target.closest('.pop-up__window')) {
        popUp.classList.remove('active');
        popUp.querySelector('.pop-up__tariff').innerHTML = '';
        popUp.removeEventListener('click', clickOutWindowForClose);
    }
}