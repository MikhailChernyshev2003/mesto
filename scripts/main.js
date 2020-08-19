let popup = document.querySelector(".popup");
const addPopup = document.querySelector("#addPopup");
const imgPopup = document.querySelector('#imgPopup');
let OpenButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector('.profile__add-button');
let CloseButton = popup.querySelector(".popup__close-button");
const secondCloseButton = addPopup.querySelector('.popup__close-button');
const imgCloseButton = document.querySelector('.popup__close-img-button');
let SaveButton = popup.querySelector(".popup__container-button");
const secondSaveButton = addPopup.querySelector('.popup__container-button');
let inputName = popup.querySelector("#name");
let inputJob = popup.querySelector("#job");
const inputTitle = addPopup.querySelector('#title');
const inputLink = addPopup.querySelector('#link');
let name = document.querySelector(".profile__name");
let job = document.querySelector(".profile__status");
let form = document.querySelector(".popup__container");
const img = document.querySelectorAll('.element__image');

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





let popupToggle = function (evt) {
    popup.classList.toggle('popup_opened');
    if(popup.classList.contains('popup_opened')){
        inputName.value=name.textContent;
        inputJob.value=job.textContent;
    }
}
const addPopupToggle = function (evt) {
    addPopup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    job.textContent = inputJob.value;
    name.textContent = inputName.value;
    popup.classList.toggle('popup_opened');
}

function addElement (evt){
    evt.preventDefault(); 
    const elementTemplate = document.querySelector('#element').content;
    const elements = document.querySelector('.elements');
    const element = elementTemplate.cloneNode(true);
    element.querySelector('.element__paragraph').textContent = inputTitle.value;
    element.querySelector('.element__image').src = inputLink.value;
    const titleBuff = inputTitle.value;
    const linkBuff = inputLink.value;
    element.querySelector('.element__heart-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__heart-button_active');
    });
    element.querySelector('.element__image').addEventListener('click', function (evt) {
        document.querySelector('.popup__text').textContent = titleBuff;
        document.querySelector('.popup__image').src = linkBuff;
        imgPopup.classList.toggle('popup_opened');
    });
    elements.prepend(element);
    const deleteButton = document.querySelectorAll('.element__delete-button');
    deleteButton.forEach(function (item) {
        item.addEventListener('click', (evt) => {
            const targetElement = evt.target;
            targetElement.parentNode.remove();
        });
    });
    addPopup.classList.toggle('popup_opened');
    inputTitle.value = '';
    inputLink.value = '';
}

initialCards.forEach(function (initialCards){
    const elementTemplate = document.querySelector('#element').content;
    const elements = document.querySelector('.elements');
    const element = elementTemplate.cloneNode(true);
    element.querySelector('.element__paragraph').textContent = initialCards.name;
    element.querySelector('.element__image').src = initialCards.link;
    element.querySelector('.element__heart-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__heart-button_active');
    });
    element.querySelector('.element__image').addEventListener('click', function (evt) {
        document.querySelector('.popup__text').textContent = initialCards.name;
        document.querySelector('.popup__image').src = initialCards.link;
        imgPopup.classList.toggle('popup_opened');
    });
    elements.prepend(element);
});

const deleteButton = document.querySelectorAll('.element__delete-button');
    deleteButton.forEach(function (item) {
        item.addEventListener('click', (evt) => {
            const targetElement = evt.target;
            targetElement.parentNode.remove();
        });
});

addButton.addEventListener('click', addPopupToggle);
SaveButton.addEventListener('click', formSubmitHandler); 
OpenButton.addEventListener('click', popupToggle);
CloseButton.addEventListener('click', popupToggle);
secondCloseButton.addEventListener('click', addPopupToggle);
secondSaveButton.addEventListener('click', addElement);
imgCloseButton.addEventListener('click', function (evt){
    imgPopup.classList.toggle('popup_opened');
});