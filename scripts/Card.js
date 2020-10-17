import {togglePopup, imgPopup, setEventListenerForEsc} from './utils.js';
const documentImage = document.querySelector('.popup__image');

export default class Card{
    constructor(link, title, cardSelector, handleCardClick){
        this._cardSelector = cardSelector;
        this._link = link;
        this._title = title; 
        //this._handleCardClick = handleCardClick;
    }

    getCard() {
        //const elementTemplate = this._getTemplate();
        const element = this._getTemplate();
        const image = element.querySelector('.element__image');
        element.querySelector('.element__paragraph').textContent = this._title;
        image.src = this._link;
        image.alt = this._title;
        this.element = element;
        this.image = image;
        this._setEventListeners(this._link, this._title);
        return this.element;
    }

    _handleLikeCard(evt) {
        evt.target.classList.toggle('element__heart-button_active');
    }

    _handleDeleteCard(evt){
        const targetElement = evt.target;
        targetElement.parentNode.remove();
    }

    _handleCardClick(link, title){
        document.querySelector('.popup__text').textContent = title;
        documentImage.src = link;
        documentImage.alt = title;
        togglePopup(imgPopup);
        setEventListenerForEsc();
    }

    _setEventListeners(link, title){
        this.element.querySelector('.element__heart-button').addEventListener('click', (evt) =>{
            this._handleLikeCard(evt);
        });
        this.element.querySelector('.element__delete-button').addEventListener('click', (evt) => {
            this._handleDeleteCard(evt);
        });
        this.image.addEventListener('click', () => {
            this._handleCardClick(link, title);
        });
    }

    _getTemplate() {
        const template = document.querySelector(this._cardSelector).content;
        const element = template.cloneNode(true);
        return element;
    }
    
}