const popup = document.querySelector('.popup');
const addCardPopup = document.querySelector('.addPopup');
const imgPopup = document.querySelector('.imgPopup');
const openButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const imgCloseButton = document.querySelector('.popup__close-img-button');
const saveButton = popup.querySelector('.popup__container-button');
const secondSaveButton = addCardPopup.querySelector('.popup__container-button');
const inputName = popup.querySelector('#name');
const inputJob = popup.querySelector('#job');
const inputTitle = addCardPopup.querySelector('#title');
const inputLink = addCardPopup.querySelector('#link');
const name = document.querySelector('.profile__name span');
const job = document.querySelector('.profile__status');
const form = document.querySelector('.popup__container');
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

function handleTogglePopup(evt) {
    const popupForToggle = document.querySelector(evt.target.dataset.popup);
    if (popupForToggle) {
        togglePopup(popupForToggle);
    }
}

function togglePopup(popupForToggle) {
    popupForToggle.classList.toggle('popup_opened');
}

function editFormSubmitHandler(evt) {
    evt.preventDefault();
    job.textContent = inputJob.value;
    name.textContent = inputName.value;
    togglePopup(popup);
}

function createElement() {
    const elementTemplate = document.querySelector('#element').content;
    const element = elementTemplate.cloneNode(true);
    const image = element.querySelector('.element__image');
    element.querySelector('.element__paragraph').textContent = inputTitle.value;
    image.src = inputLink.value;
    element.querySelector('.element__heart-button')
        .addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__heart-button_active');
        });
    image.addEventListener('click', function (evt) {
        document.querySelector('.popup__text').textContent = inputTitle.value;
        document.querySelector('.popup__image').src = inputLink.value;
        togglePopup(imgPopup);
    });
    return element;
}

const setEventListenerForDeleteButton = function (item) {
    item.addEventListener('click', (evt) => {
        const targetElement = evt.target;
        targetElement.parentNode.remove();
    });
}

function addElement(evt) {
    evt.preventDefault();
    const elements = document.querySelector('.elements');
    const newElement = createElement();
    elements.prepend(newElement);
    const deleteButton = document.querySelectorAll('.element__delete-button');
    deleteButton.forEach(setEventListenerForDeleteButton);
    togglePopup(addCardPopup);
    inputTitle.value = '';
    inputLink.value = '';
}

function initializationCards (initialCards) {
    const elementTemplate = document.querySelector('#element').content;
    const elements = document.querySelector('.elements');
    const element = elementTemplate.cloneNode(true);
    const image = element.querySelector('.element__image');
    element.querySelector('.element__paragraph').textContent = initialCards.name;
    image.src = initialCards.link;
    element.querySelector('.element__heart-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__heart-button_active');
    });
    image.addEventListener('click', function (evt) {
        document.querySelector('.popup__text').textContent = initialCards.name;
        document.querySelector('.popup__image').src = initialCards.link;
        togglePopup(imgPopup);
    });
    elements.prepend(element);
}
initialCards.forEach(initializationCards);

const setEventListenerForCloseButton = function (item) {
    item.addEventListener('click', handleTogglePopup);
}
closeButtons.forEach(setEventListenerForCloseButton);

const deleteButton = document.querySelectorAll('.element__delete-button');
deleteButton.forEach(setEventListenerForDeleteButton);
openButton.addEventListener('click', handleTogglePopup);
addButton.addEventListener('click', handleTogglePopup);
saveButton.addEventListener('click', editFormSubmitHandler);
secondSaveButton.addEventListener('click', addElement);
imgCloseButton.addEventListener('click', function (evt) {
    togglePopup(imgPopup);
});