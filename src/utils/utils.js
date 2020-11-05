export const imgPopup = document.querySelector('.img-popup');

export function togglePopup(popupForToggle) {
    popupForToggle.classList.toggle('popup_opened');    
}

export function setEventListenerForEsc(){
    document.addEventListener('keydown', escHandler);
}    
export function deleteEventListenerForEsc(){
    document.removeEventListener('keydown', escHandler);
}
export const escHandler = function (evt){
    if(evt.key === 'Escape'){
        const openedPopup = document.querySelector('.popup_opened');
        togglePopup(openedPopup);
        deleteEventListenerForEsc();
    }
} 