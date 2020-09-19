import FormValidator from "./formValidator.js";
import Card from "./Card.js";
const profilePopup = document.querySelector('.profile-popup');
const addCardPopup = document.querySelector('.add-popup');
const imgPopup = document.querySelector('.img-popup');
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
const elements = document.querySelector('.elements');
const documentImage = document.querySelector('.popup__image');

 
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

function togglePopup(popupForToggle) {
    popupForToggle.classList.toggle('popup_opened');    
}

function editFormSubmitHandler(evt) {
    evt.preventDefault();
    userJob.textContent = inputJob.value;
    userName.textContent = inputName.value;
    togglePopup(profilePopup);
}

function addElement(evt) {
    evt.preventDefault();
    const card = new Card(inputLink.value, inputTitle.value);     
    togglePopup(addCardPopup);
    inputTitle.value = '';
    inputLink.value = '';
    elements.prepend(card.getElement());
}

function initCard (initialCards) {
    const card = new Card(initialCards.link, initialCards.name);
    elements.prepend(card.getElement());
}
initialCards.forEach(initCard);

openProfilePopupButton.addEventListener('click', function(){
    inputName.value=userName.textContent;
    inputJob.value=userJob.textContent; 
    togglePopup(profilePopup);
    setEventListenerForEsc();
});
openAddCardPopupButton.addEventListener('click', function(){
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

function closePopupByEsc(item){
    item.classList.toggle('popup_opened');
    deleteEventListenerForEsc();
}
const handler = function (evt){
    if(evt.key === 'Escape' && profilePopup.classList.contains('popup_opened')){
        closePopupByEsc(profilePopup);
    }
    if(evt.key === 'Escape' && addCardPopup.classList.contains('popup_opened')){
        closePopupByEsc(addCardPopup);
    }
    if(evt.key === 'Escape' && imgPopup.classList.contains('popup_opened')){
        closePopupByEsc(imgPopup);
    }
}

function setEventListenerForEsc(){
    document.addEventListener('keydown', handler);
}    

function deleteEventListenerForEsc(){
    document.removeEventListener('keydown', handler);
}

document.addEventListener('click', function(evt){
    if (evt.target.classList.contains('profile-popup')){
        togglePopup(profilePopup);
    }
    if (evt.target.classList.contains('add-popup')){
        togglePopup(addCardPopup);
    }
    if (evt.target.classList.contains('img-popup')){
        togglePopup(imgPopup);
    }
})

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