import '../pages/index.css';

import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js'; 

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
} from '../utils/constants.js';

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























