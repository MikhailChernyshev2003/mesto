import '../pages/index.css';

import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js'; 

import {
    profilePopup,
    addCardPopup,
    openProfilePopupButton,
    openAddCardPopupButton,
    userNameSelector,
    userJobSelector,
    gridCards,
    formAdd,
    formProfile,
    cardSelector,
    validationConfig,
    initialCards,
    profilePopupSelector,
    imgPopupSelector,
    addCardPopupSelector,
    userName,
    userJob
} from './constants.js';

const popupImg = new PopupWithImage(imgPopupSelector);
popupImg.setImgEventListeners();

function createCard(data) {
    const card = new Card(
        data,
        cardSelector,
        () => {
            popupImg.open(data);
        }
    );
    cardList.addItem(card.getCard());
}

const cardList = new Section({
    items: initialCards,
    renderer: createCard
}, gridCards);
  
cardList.rendererItems();

const userAbout = new UserInfo(userNameSelector, userJobSelector);

const popupEditProfile = new PopupWithForm(
    profilePopupSelector,
    (data) => {
        userAbout.setUserInfo(data);
    })
popupEditProfile.setEventListeners();

const popupAddCards = new PopupWithForm(
    addCardPopupSelector,
    createCard)
popupAddCards.setEventListeners();

function openEditProfile() {
    const profileInfo = userAbout.getUserInfo();
    userName.value = profileInfo.name;
    userJob.value = profileInfo.info;
}

const profileFormValidator = new FormValidator(validationConfig, profilePopup);
profileFormValidator.enableValidation();

const addCardFormValidatior = new FormValidator(validationConfig, addCardPopup);
addCardFormValidatior.enableValidation();

openProfilePopupButton.addEventListener("click", () => {
    popupEditProfile.open();
    openEditProfile();
    profileFormValidator.removeError();
});

openAddCardPopupButton.addEventListener("click", () => {
    popupAddCards.open();
    addCardFormValidatior.removeError();
});











/*import '../pages/index.css';

import {imgPopup, togglePopup, setEventListenerForEsc, escHandler, deleteEventListenerForEsc} from './utils.js';
import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import Popup from '../scripts/Popup.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js'; 

const profilePopup = document.querySelector('.profile-popup');
const addCardPopup = document.querySelector('.add-popup');
const openProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddCardPopupButton = document.querySelector('.profile__add-button');
const closeButton = profilePopup.querySelector('.popup__close-button');
const addCardPopupCloseButton = addCardPopup.querySelector('.popup__close-button');
const imgCloseButton = document.querySelector('.popup__close-img-button');
const saveProfileButton = profilePopup.querySelector('.popup__container-button');
const saveCardButton = addCardPopup.querySelector('.popup__container-button');
const inputName = profilePopup.querySelector('#name');
const inputJob = profilePopup.querySelector('#job');
const inputTitle = addCardPopup.querySelector('#title');
const inputLink = addCardPopup.querySelector('#link');
const userName = document.querySelector('.profile__name span');
const userJob = document.querySelector('.profile__status');
//const cardList = document.querySelector('.elements');
const cardSelector = '#element';
const errorSelector = '.popup__input-error';

const validationConfig = {
    inputSelector: '.popup__container-input',
    submitButtonSelector: '.popup__container-button',
    inactiveButtonClass: 'popup__container-button_disabled',
    inputErrorClass: 'popup__container-input_error',
    errorClass: 'popup__error_visible',
    spanClass: 'popup__input-error'
}
 
const initialCards = [
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

function editFormSubmitHandler(evt) {
    evt.preventDefault();
    userJob.textContent = inputJob.value;
    userName.textContent = inputName.value;
    togglePopup(profilePopup);
}

function createCard(link, name, cardSelector, handleCardClick){
    return new Card(link, name, cardSelector, handleCardClick);
}

const cardList = new Section({
    items: initialCards,
    renderer: createCard
}, cardList);
  
cardList.rendererItems();

function removeError(item) {
    const inputList = item.querySelectorAll(validationConfig.inputSelector);
    const errorList = item.querySelectorAll(errorSelector);

    inputList.forEach((input) => {
        input.classList.remove(validationConfig.inputErrorClass);
    });
    
    errorList.forEach((span) => {
        span.classList.remove(validationConfig.errorClass);
        span.textContent = '';
    });
    saveProfileButton.classList.remove(validationConfig.inactiveButtonClass); 
}

function addElement(evt) {
    evt.preventDefault();
    const card = createCard(inputLink.value, inputTitle.value, cardSelector, imgPopup.open(card));
    saveCardButton.classList.add(validationConfig.inactiveButtonClass);   
    togglePopup(addCardPopup);
    inputTitle.value = '';
    inputLink.value = '';
    cardList.prepend(card.getCard());
    
}

function initCard (initialCards) {
    const card = createCard(initialCards.link, initialCards.name, cardSelector, imgPopup.open(card));
    cardList.prepend(card.getCard());
}
initialCards.forEach(initCard);

openProfilePopupButton.addEventListener('click', function(){
    inputName.value = userName.textContent;
    inputJob.value = userJob.textContent;
    removeError(profilePopup); 
    togglePopup(profilePopup);
    setEventListenerForEsc();
});

openAddCardPopupButton.addEventListener('click', function(){
    removeError(addCardPopup);
    togglePopup(addCardPopup);
    setEventListenerForEsc();
});

saveProfileButton.addEventListener('click', editFormSubmitHandler);
saveCardButton.addEventListener('click', addElement);
closeButton.addEventListener('click', function(){
    togglePopup(profilePopup);
});
addCardPopupCloseButton.addEventListener('click', function(){    
    togglePopup(addCardPopup);
    inputTitle.value = '';
    inputLink.value = '';
});
imgCloseButton.addEventListener('click', function () {
    togglePopup(imgPopup);
});

document.addEventListener('click', function(evt){
    if (evt.target.classList.contains('popup')) {
        const openedPopup = document.querySelector('.popup_opened');
        togglePopup(openedPopup);
    }
})

const profileFormValidator = new FormValidator(validationConfig, profilePopup);
profileFormValidator.enableValidation();

const addCardFormValidatior = new FormValidator(validationConfig, addCardPopup);
addCardFormValidatior.enableValidation();

const popupImg = new PopupWithImage(imgPopup);
popupImg.setEventListeners();

const userAbout = new UserInfo(userName, userJob);

const popupEditProfile = new PopupWithForm(
    profilePopup,
    (data) => {
        userAbout.setUserInfo(data);
    })
popupEditProfile.setEventListeners();

const popupAddCars = new PopupWithForm(
    addCardPopup,
    createCard)
popupAddCars.setEventListeners();

*/












