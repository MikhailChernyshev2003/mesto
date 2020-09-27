import {escHandler} from './index.js';
export const imgPopup = document.querySelector('.img-popup');

export function togglePopup(popupForToggle) {
    popupForToggle.classList.toggle('popup_opened');    
}

export function setEventListenerForEsc(){
    document.addEventListener('keydown', escHandler);
}    