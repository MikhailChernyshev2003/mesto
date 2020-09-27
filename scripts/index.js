import {imgPopup, togglePopup, setEventListenerForEsc} from './utils.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js';

const profilePopup = document.querySelector('.profile-popup');
const addCardPopup = document.querySelector('.add-popup');
const openProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddCardPopupButton = document.querySelector('.profile__add-button');
const closeButton = profilePopup.querySelector(".popup__close-button");
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
const cardList = document.querySelector('.elements');

 
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

function newCard(link, name, cardSelector){
    return new Card(link, name, cardSelector);
}

function addElement(evt) {
    evt.preventDefault();
    const card =  newCard(inputLink.value, inputTitle.value, '#element');
    saveCardButton.classList.add('popup__container-button_disabled');   
    togglePopup(addCardPopup);
    inputTitle.value = '';
    inputLink.value = '';
    cardList.prepend(card.getCard());
    
}

function initCard (initialCards) {
    const card = newCard(initialCards.link, initialCards.name, '#element');
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

export const escHandler = function (evt){
    if(evt.key === 'Escape'){
        const openedPopup = document.querySelector('.popup_opened');
        togglePopup(openedPopup);
        deleteEventListenerForEsc();
    }
} 

function deleteEventListenerForEsc(){
    document.removeEventListener('keydown', escHandler);
}

document.addEventListener('click', function(evt){
    if (evt.target.classList.contains('popup')) {
        const openedPopup = document.querySelector('.popup_opened');
        togglePopup(openedPopup);
    }
})

function removeError(item) {
    item.querySelectorAll(".popup__container-input").forEach((input) => {
        input.classList.remove("popup__container-input_error");
    });
    item.querySelectorAll(".popup__input-error").forEach((span) => {
        span.classList.remove("popup__error_visible");
        span.textContent = "";
    });
    saveProfileButton.classList.remove('popup__container-button_disabled'); 
}

function formValidation() {
    const formArray = Array.from(document.querySelectorAll(".popup__container")); 
    formArray.forEach((form) => {
        const formValidator = new FormValidator({
            inputSelector: '.popup__container-input',
            submitButtonSelector: '.popup__container-button',
            inactiveButtonClass: 'popup__container-button_disabled',
            inputErrorClass: 'popup__container-input_error',
            errorClass: 'popup__error_visible'
        }, form);
        formValidator.enableValidation();
    });
}
formValidation();