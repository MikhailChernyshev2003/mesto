const documentImage = document.querySelector('.popup__image');

export default class Card{
    constructor({ data, id, handleCardClick, handleConfirm, handleLikeCard }, cardSelector){
        this._cardSelector = cardSelector;
        this._link = data.link;
        this._title = data.title; 
        this._handleCardClick = handleCardClick;
        this._owner = data.owner._id;
        this._likes = data.likes;
        this._handleLikeCard = handleLikeCard;
        this._handleConfirm = handleConfirm;
        this._userId = id;
    }

    getCard() {
        const element = this._getTemplate();
        const image = element.querySelector('.element__image');
        element.querySelector('.element__paragraph').textContent = this._title;
        image.src = this._link;
        image.alt = this._title;
        this.element = element;
        this.image = image;
        this._elementNumber = element.querySelector(".element__like-current");
        this._elementNumber.textContent = this._likes.length;
        this._setEventListeners(this._link, this._title);
        return this.element;
    }

    /*_handleLikeCard(evt) {
        evt.target.classList.toggle('element__heart-button_active');
    }*/

    _handleDeleteCard(evt){
        const targetElement = evt.target;
        targetElement.parentNode.remove();
    }

    _setEventListeners(link, name){
        this.element.querySelector('.element__heart-button').addEventListener('click', this._handleLikeCard);
        this.element.querySelector('.element__delete-button').addEventListener('click', this._handleConfirm);
        this.image.addEventListener('click', this._handleCardClick);
    }

    _getTemplate() {
        const template = document.querySelector(this._cardSelector).content;
        const element = template.cloneNode(true);
        return element;
    }
    
    numberOfLikes(number) {
        this._elementNumber.textContent = number.length;
        this._toggleLikeCard();
    }

    isLiked() {
        return this._likes.find((like) => {
            if (like._id === this._userId) {
                return true;
            } else {
                return false
            };
        })
    }
}