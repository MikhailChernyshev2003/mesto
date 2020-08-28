const popup = document.querySelector('.profile-popup');
const addCardPopup = document.querySelector('.add-popup');
const imgPopup = document.querySelector('.img-popup');
const openProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddCardPopupButton = document.querySelector('.profile__add-button');
//const closeButtons = document.querySelectorAll('.popup__close-button');
const closeButton = popup.querySelector(".popup__close-button");
const addCardPopupCloseButton = addCardPopup.querySelector('.popup__close-button');
const imgCloseButton = document.querySelector('.popup__close-img-button');
const saveProfileButton = popup.querySelector('.popup__container-button');
const saveCardButton = addCardPopup.querySelector('.popup__container-button');
const inputName = popup.querySelector('#name');
const inputJob = popup.querySelector('#job');
const inputTitle = addCardPopup.querySelector('#title');
const inputLink = addCardPopup.querySelector('#link');
const userName = document.querySelector('.profile__name span');
const userJob = document.querySelector('.profile__status');

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

/*function handleTogglePopup(evt) {
    const popupForToggle = document.querySelector(evt.target.dataset.popup);
    if (popupForToggle) {
        togglePopup(popupForToggle);
    }
    
}*/

function togglePopup(popupForToggle) {
    popupForToggle.classList.toggle('popup_opened');
    inputName.value=userName.textContent;
    inputJob.value=userJob.textContent; 
}

function editFormSubmitHandler(evt) {
    evt.preventDefault();
    userJob.textContent = inputJob.value;
    userName.textContent = inputName.value;
    togglePopup(popup);
}

function createElement() {
    const elementTemplate = document.querySelector('#element').content;
    const element = elementTemplate.cloneNode(true);
    const image = element.querySelector('.element__image');
    element.querySelector('.element__paragraph').textContent = inputTitle.value;
    image.src = inputLink.value;
    image.alt = 'здесь была красивая картинка';
    element.querySelector('.element__heart-button')
        .addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__heart-button_active');
        });
    image.addEventListener('click', function (evt) {
        document.querySelector('.popup__text').textContent = inputTitle.value;
        document.querySelector('.popup__image').src = inputLink.value;
        document.querySelector('.popup__image').alt = 'здесь была красивая картинка';
        togglePopup(imgPopup);
    });
    const deleteButton = document.querySelector('.element__delete-button');
    setEventListenerForDeleteButton(deleteButton);
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
    togglePopup(addCardPopup);
    inputTitle.value = '';
    inputLink.value = '';
}

/*function initElements(item) {
    const elementTemplate = document.querySelector('#element').content;
    const element = elementTemplate.cloneNode(true);
    const image = element.querySelector('.element__image');
    element.querySelector('.element__paragraph').textContent = item.name;
    image.src = item.link;
    image.alt = 'здесь была красивая картинка';
    element.querySelector('.element__heart-button')
        .addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__heart-button_active');
        });
    image.addEventListener('click', function (evt) {
        document.querySelector('.popup__text').textContent = item.name;
        document.querySelector('.popup__image').src = item.link;
        document.querySelector('.popup__image').alt = 'здесь была красивая картинка';
        togglePopup(imgPopup);
    });
    const deleteButton = document.querySelector('.element__delete-button');
    setEventListenerForDeleteButton(deleteButton);
    return element;
}*/

function initCards (initialCards) {
    const elementTemplate = document.querySelector('#element').content;
    const elements = document.querySelector('.elements');
    const element = elementTemplate.cloneNode(true);
    const image = element.querySelector('.element__image');
    element.querySelector('.element__paragraph').textContent = initialCards.name;
    image.src = initialCards.link;
    image.alt = 'здесь была красивая картинка';
    element.querySelector('.element__heart-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__heart-button_active');
    });
    image.addEventListener('click', function (evt) {
        document.querySelector('.popup__text').textContent = initialCards.name;
        document.querySelector('.popup__image').src = initialCards.link;
        document.querySelector('.popup__image').alt = 'здесь была красивая картинка';
        togglePopup(imgPopup);
    });
    elements.prepend(element);
    const deleteButton = document.querySelector('.element__delete-button');
    setEventListenerForDeleteButton(deleteButton);
}

initialCards.forEach(initCards);

//openProfilePopupButton.addEventListener('click', handleTogglePopup);
//openAddCardPopupButton.addEventListener('click', handleTogglePopup);
openProfilePopupButton.addEventListener('click', function(evt){
    togglePopup(popup);
});
openAddCardPopupButton.addEventListener('click', function(evt){
    togglePopup(addCardPopup);
});
saveProfileButton.addEventListener('click', editFormSubmitHandler);
saveCardButton.addEventListener('click', addElement);
closeButton.addEventListener('click', function(evt){
    togglePopup(popup);
});
addCardPopupCloseButton.addEventListener('click', function(evt){    
    togglePopup(addCardPopup);
    inputTitle.value = '';
    inputLink.value = '';
});
imgCloseButton.addEventListener('click', function (evt) {
    togglePopup(imgPopup);
});