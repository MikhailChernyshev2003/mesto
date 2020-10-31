export const profilePopup = document.querySelector('.profile-popup');
export const addCardPopup = document.querySelector('.add-popup');
export const profilePopupSelector = '.profile-popup';
export const imgPopupSelector = '.img-popup';
export const openProfilePopupButton = document.querySelector('.profile__edit-button');
export const openAddCardPopupButton = document.querySelector('.profile__add-button');
export const userName = '.profile__name span';
export const userJob = '.profile__status';
export const gridCards ='.elements';
export const formAdd = document.forms.add;
export const formProfile = document.forms.edit;
export const cardSelector = '#element';

export const validationConfig = {
    inputSelector: '.popup__container-input',
    submitButtonSelector: '.popup__container-button',
    inactiveButtonClass: 'popup__container-button_disabled',
    inputErrorClass: 'popup__container-input_error',
    errorClass: 'popup__error_visible',
    spanClass: 'popup__input-error'
}

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];