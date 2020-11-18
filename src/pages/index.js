//import '../pages/index.css';

import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js'; 
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import Api from '../components/Api.js';

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
    userJob,
    buttonAvatarEdit,
    popupAvatar,
    avatarImg,
    popupConfirm,
    popupConfirmSelector,
    avatarImgSelector,
    popupAvatarSelector
} from '../utils/constants.js';

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-16',
    headers: {
        authorization: '9f43a7d2-82a8-422b-a94c-ca2a019fb15e',
        'content-type': 'application/json'
    }
});

/*const popupImg = new PopupWithImage(imgPopupSelector);
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
*/
Promise.all([api.getUserInfo(), api.getUsersCards()])
    .then((res) => {
        const [data, usersCards] = res;
        const reversed = usersCards.reverse()

        const popupConfirmDelete = new PopupWithSubmit(popupConfirmSelector);
        popupConfirmDelete.setEventListeners();

        const cardList = new Section({
            items: reversed,
            renderer: createCard,
        }, gridCards);

        cardList.rendererItems();

        function createCard(item) {
            const card = new Card({
                data: item,
                id: data._id,
                handleCardClick: () => {
                    popupImg.open(item);
                },
                handleConfirm: () => {
                    popupConfirmDelete.open();
                    popupConfirmDelete.push(() => {
                    api.deleteCard(item._id)//
                    .then(() => {
                        card.deleteCards();
                        popupConfirmDelete.close();
                    })
                    .catch((err) => {console.log(err)});
                    })
                },
                handleLikeCard: () => {
                    const isLiked = card.isLiked();
                    if (!isLiked) {
                        api.addLike(item._id)
                    .then((item) => {
                        card.numberOfLikes(item.likes);
                    })
                    .catch((err) => {console.log(err)});
                    } else {
                        api.deleteLike(item._id)
                    .then((item) => {
                        card.numberOfLikes(item.likes);
                    })
                    .catch((err) => {console.log(err)});
                }
            },
        }, cardSelector)
        return card.getCard();
        //cardList.addItem(card.getCard());
    }

    const userAbout = new UserInfo(userNameSelector, userJobSelector, avatarImgSelector);
    userAbout.setUserInfo(data);
    userAbout.setUserAvatar(data);

    const popupEditProfile = new PopupWithForm(
        profilePopupSelector, {
        formSubmit: (user) => {
            activeLoadind(true, profilePopup);
        api.editUserInfo(user.name, user.job)
            .then(() => {
                userAbout.setUserInfo(user);
            })
            .then(() => {
                popupEditProfile.close();
            })
            .catch((err) => {console.log(err)})
            .finally(() => {
                activeLoadind(false, profilePopup);
            })
        }
    })
    popupEditProfile.setEventListeners();

    openProfilePopupButton.addEventListener("click", () => {
        popupEditProfile.open();
        openEditProfile();
        profileFormValidator.removeError();
    });

    function openEditProfile() {
        const profileInfo = userAbout.getUserInfo();
        userName.value = profileInfo.name;
        userJob.value = profileInfo.about;
    }

    const popupEditAvatar = new PopupWithForm(
        popupAvatarSelector, {
        formSubmit: (user) => {
            activeLoadind(true, popupAvatar);
            api.editUserAvatar(user.avatar)
                .then(() => {
                userAbout.setUserAvatar(user);
            })
            .then(() => {
                popupEditAvatar.close();
            })
            .catch((err) => {console.log(err)})
            .finally(() => {
                activeLoadind(false, popupAvatar);
            })
      }
    })
    popupEditAvatar.setEventListeners();

    buttonAvatarEdit.addEventListener("click", () => {
        popupEditAvatar.open();
        formAvatarValidation.removeError();//cделать валидацию формы редактирования профиля
    });

    const popupAddCards = new PopupWithForm(
        addCardPopupSelector, {
        formSubmit: (data) => {
        activeLoadind(true, addCardPopup);
        api.addMyCard(data.name || data.title , data.link)
            .then((data) => {
                createCard(data)
            })
            .then(() => {
                popupAddCards.close();
            })
            .finally(() => {
                activeLoadind(false, addCardPopup);
            })
        }
    })
    popupAddCards.setEventListeners();

    openAddCardPopupButton.addEventListener("click", () => {
        popupAddCards.open();
        addCardFormValidatior.removeError();
    });
})

const activeLoadind = (bool, documentFragment) => {
    const currentSubmitBtn = documentFragment.querySelector('.popup__button-save');
    if (bool) {
      currentSubmitBtn.textContent = 'Сохранение...';
    } else {
      currentSubmitBtn.textContent = textBTN(documentFragment);
    }
}

const textBTN = (documentFragment) => {
    if (documentFragment === addCardPopup) {
      return 'Создать'
    } else {
      return 'Сохранить'}
}

const popupImg = new PopupWithImage(imgPopupSelector);
popupImg.setImgEventListeners();

const popupConfirmDelete = new PopupWithSubmit(popupConfirmSelector);
popupConfirmDelete.setEventListeners();

const profileFormValidator = new FormValidator(validationConfig, profilePopup);
profileFormValidator.enableValidation();

const addCardFormValidatior = new FormValidator(validationConfig, addCardPopup);
addCardFormValidatior.enableValidation();

const formAvatarValidation = new FormValidator(validationConfig, popupAvatar);
formAvatarValidation.enableValidation();















