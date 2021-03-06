const documentImage = document.querySelector('.popup__image');

export default class Card{
    constructor({ data, id, handleCardClick, handleConfirm, handleLikeCard }, cardSelector){
        this.id = data._id;
        this._cardSelector = cardSelector;
        this._link = data.link;
        this._title = data.title || data.name; 
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
        element.querySelector('.element').setAttribute('id', 'card-' + this.id);
        image.src = this._link;
        image.alt = this._title;
        this.element = element;
        this.image = image;
        this._elementNumber = element.querySelector(".element__like-current");
        this._elementNumber.textContent = this._likes.length;
        this._setEventListeners(this._link, this._title);
        if (this._owner !== this._userId) {
            this.element.querySelector('.element__delete-button').style.display = 'none';
        };
        this._buttonLike = this.element.querySelector(".element__heart-button");
        if (this.isLiked()) {
            this._buttonLike.classList.add("element__heart-button_active");
        }
        return this.element;
    }

    deleteCards() {
        document.querySelector('#card-' + this.id).remove();
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
    
    numberOfLikes(likes) {
        this._likes = likes;
        this._elementNumber.textContent = likes.length;
        if (this.isLiked()) {
            this._buttonLike.classList.add('element__heart-button_active');
        } else {
            this._buttonLike.classList.remove('element__heart-button_active');
        }
    }
    isDeletable(){
        if(this._userId === this._);
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