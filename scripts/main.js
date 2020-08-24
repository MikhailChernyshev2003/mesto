const popup = document.querySelector('.popup');
const addCardPopup = document.querySelector('.addPopup');
const imgPopup = document.querySelector('.imgPopup');
const openButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = popup.querySelector('.popup__close-button');
const secondCloseButton = addCardPopup.querySelector('.popup__close-button');
const imgCloseButton = document.querySelector('.popup__close-img-button');
const saveButton = popup.querySelector('.popup__container-button');
const secondSaveButton = addCardPopup.querySelector('.popup__container-button');
const inputName = popup.querySelector('#name');
const inputJob = popup.querySelector('#job');
const inputTitle = addCardPopup.querySelector('#title');
const inputLink = addCardPopup.querySelector('#link');
const name = document.querySelector('.profile__name');
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

function togglePopup(evt) {
    if(evt.target === openButton || evt.target === closeButton){
    /*switch (item){
        case 'popup':
            popup.classList.toggle('popup_opened');
            if(popup.classList.contains('popup_opened')){
            inputName.value=name.textContent;
            inputJob.value=job.textContent;
            }
            break;
        case 'addCardPopup':
            addCardPopup.classList.toggle('popup_opened');
            break;
        case 'imgPopup':
            imgPopup.classList.toggle('popup_opened');    
    }*/
    popup.classList.toggle('popup_opened');
    }
    else{
        //addCardPopup.classList.toggle('popup_opened')
    }
    
    inputTitle.value = '';
    inputLink.value = '';   
}
/*const addPopupToggle = function (evt) {
    addCardPopup.classList.toggle('popup_opened');
    inputTitle.value = '';
    inputLink.value = ''; 
}*/

function editFormSubmitHandler (evt) {
    evt.preventDefault(); 
    job.textContent = inputJob.value;
    //name.textContent = inputName.value;
    name.innerHTML = inputName.value + '<button class="profile__edit-button" type="button"></button>';
    popup.classList.toggle('popup_opened');
}

function addElement (evt){
    evt.preventDefault(); 
    const elementTemplate = document.querySelector('#element').content;
    const elements = document.querySelector('.elements');
    const element = elementTemplate.cloneNode(true);
    element.querySelector('.element__paragraph').textContent = inputTitle.value;
    element.querySelector('.element__image').src = inputLink.value;
    const cardTitle = inputTitle.value; // buff - сокращение от buffer, так как использовал переменную для временного хранения данных) 
    const cardLink = inputLink.value;
    element.querySelector('.element__heart-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__heart-button_active');
    });
    element.querySelector('.element__image').addEventListener('click', function (evt) {
        document.querySelector('.popup__text').textContent = cardTitle;
        document.querySelector('.popup__image').src = cardLink;
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
    addCardPopup.classList.toggle('popup_opened');
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

addButton.addEventListener('click', togglePopup('addCardPopup'));
saveButton.addEventListener('click', editFormSubmitHandler); 
openButton.addEventListener('click', togglePopup('popup'));
closeButton.addEventListener('click', togglePopup('popup'));
secondCloseButton.addEventListener('click', togglePopup)('addCardPopup');
secondSaveButton.addEventListener('click', addElement);
imgCloseButton.addEventListener('click', function (evt){
    imgPopup.classList.toggle('popup_opened');
});