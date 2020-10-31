import {togglePopup, imgPopup, setEventListenerForEsc} from './utils.js';
const documentImage = document.querySelector('.popup__image');

export default class Card{
    constructor(data, cardSelector, handleCardClick){
        this._cardSelector = cardSelector;
        this._link = data.link;
        this._name = data.name; 
        this._handleCardClick = handleCardClick;
    }

    getCard() {
        const element = this._getTemplate();
        const image = element.querySelector('.element__image');
        element.querySelector('.element__paragraph').textContent = this._name;
        image.src = this._link;
        image.alt = this._name;
        this.element = element;
        this.image = image;
        this._setEventListeners(this._link, this._name);
        return this.element;
    }

    _handleLikeCard(evt) {
        evt.target.classList.toggle('element__heart-button_active');
    }

    _handleDeleteCard(evt){
        const targetElement = evt.target;
        targetElement.parentNode.remove();
    }

    _handleCardClick(link, name){
        document.querySelector('.popup__text').textContent = name;
        documentImage.src = link;
        documentImage.alt = name;
        togglePopup(imgPopup);
        setEventListenerForEsc();
    }

    _setEventListeners(link, name){
        this.element.querySelector('.element__heart-button').addEventListener('click', (evt) =>{
            this._handleLikeCard(evt);
        });
        this.element.querySelector('.element__delete-button').addEventListener('click', (evt) => {
            this._handleDeleteCard(evt);
        });
        this.image.addEventListener('click', () => {
            this._handleCardClick(link, name);
        });
    }

    _getTemplate() {
        const template = document.querySelector(this._cardSelector).content;
        const element = template.cloneNode(true);
        return element;
    }
    
}