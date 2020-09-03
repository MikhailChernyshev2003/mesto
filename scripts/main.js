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
//const profilePopupOverlay
//const addCardPopupOverlay
//const imgPopupOverlay = imgPopup
 
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

function createElement(link, title) {
    const elementTemplate = document.querySelector('#element').content;
    const element = elementTemplate.cloneNode(true);
    const image = element.querySelector('.element__image');
    element.querySelector('.element__paragraph').textContent = title;
    image.src = link;
    image.alt = title;
    image.addEventListener('click', function (evt) {
        const documentImage = document.querySelector('.popup__image');
        document.querySelector('.popup__text').textContent = title;
        documentImage.src = link;
        documentImage.alt = title;
        togglePopup(imgPopup);
    });    
    return element;
}
const setEventListenerForHeartButton = function(){
    document.querySelector('.element__heart-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__heart-button_active');
    });
}
const setEventListenerForDeleteButton = function (item) {
    item.addEventListener('click', (evt) => {
        const targetElement = evt.target;
        targetElement.parentNode.remove();
    });
}

function addElement(evt) {
    evt.preventDefault();
    const newElement = createElement(inputTitle.value, inputLink.value);
    elements.prepend(newElement);    
    togglePopup(addCardPopup);
    inputTitle.value = '';
    inputLink.value = '';
    setEventListenerForHeartButton();
    const deleteButton = document.querySelector('.element__delete-button');
    setEventListenerForDeleteButton(deleteButton);
}

function initCards (initialCards) {
    const newElement = createElement(initialCards.link, initialCards.name);
    elements.prepend(newElement);
    setEventListenerForHeartButton();
    const deleteButton = document.querySelector('.element__delete-button');
    setEventListenerForDeleteButton(deleteButton);
}
initialCards.forEach(initCards);

openProfilePopupButton.addEventListener('click', function(evt){
    inputName.value=userName.textContent;
    inputJob.value=userJob.textContent; 
    togglePopup(profilePopup);
});
openAddCardPopupButton.addEventListener('click', function(evt){
    togglePopup(addCardPopup);
});
saveProfileButton.addEventListener('click', editFormSubmitHandler);
saveCardButton.addEventListener('click', addElement);
closeButton.addEventListener('click', function(evt){
    togglePopup(profilePopup);
});
addCardPopupCloseButton.addEventListener('click', function(evt){    
    togglePopup(addCardPopup);
    inputTitle.value = '';
    inputLink.value = '';
});
imgCloseButton.addEventListener('click', function (evt) {
    togglePopup(imgPopup);
});
document.addEventListener('keypress', function(evt){
    if(evt.keyCode === 27 && profilePopup.classList.contains('popup_opened')){
        togglePopup(profilePopup);
    }
    if(evt.keyCode === 27 && addCardPopup.classList.contains('popup_opened')){
        togglePopup(addCardPopup);
    }
    if(evt.keyCode === 27 && imgPopup.classList.contains('popup_opened')){
        togglePopup(imgPopup);
    }
})

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