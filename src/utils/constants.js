export const profilePopup = document.querySelector('.profile-popup');
export const addCardPopup = document.querySelector('.add-popup');
export const popupAvatar = document.querySelector('.popup_avatar');
export const popupAvatarSelector = '.popup_avatar';
export const addCardPopupSelector = '.add-popup';
export const profilePopupSelector = '.profile-popup';
export const imgPopupSelector = '.img-popup';
export const popupConfirmSelector = ".popup_confirm";
export const openProfilePopupButton = document.querySelector('.profile__edit-button');
export const openAddCardPopupButton = document.querySelector('.profile__add-button');
export const buttonAvatarEdit = document.querySelector(".profile__avatar-button");//сделать эту кнопку и написать сюда действующий селектор
export const userNameSelector = '.profile__name span';
export const userJobSelector = '.profile__status';
export const userName = document.querySelector('.profile__name span');
export const userJob = document.querySelector('.profile__status');
export const gridCards ='.elements';
export const formAdd = document.forms.add;
export const formProfile = document.forms.edit;
export const cardSelector = '#element';
export const avatarImg = document.querySelector(".profile__avatar");
export const avatarImgSelector = ".profile__avatar";
export const popupConfirm = document.querySelector(".popup_confirm");

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
        title: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        title: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        title: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        title: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        title: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        title: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];