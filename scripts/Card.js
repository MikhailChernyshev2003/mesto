import {togglePopup, imgPopup, setEventListenerForEsc} from './utils.js';
const documentImage = document.querySelector('.popup__image');

export default class Card{
    constructor(link, title, cardSelector){
        this._cardSelector = cardSelector;
        this._link = link;
        this._title = title; 
        //this._createElement(link, title);
        //this._setEventListenerForHeartButton();
        //this._setEventListenerForDeleteButton();
    }

    getCard() {
        const elementTemplate = this._getTemplate();
        const element = elementTemplate.cloneNode(true);
        const image = element.querySelector('.element__image');
        element.querySelector('.element__paragraph').textContent = this._title;
        image.src = this._link;
        image.alt = this._title;
        this.element = element;
        this.image = image;
        this._setEventListeners(this._link, this._title);
        return this.element;
    }
    _setEventListeners(link, title){
        this.element.querySelector('.element__heart-button').addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__heart-button_active');
        });
        this.element.querySelector('.element__delete-button').addEventListener('click', (evt) => {
            const targetElement = evt.target;
            targetElement.parentNode.remove();
        });
        this.image.addEventListener('click', function () {
            document.querySelector('.popup__text').textContent = title;
            documentImage.src = link;
            documentImage.alt = title;
            togglePopup(imgPopup);
            setEventListenerForEsc();
        });
    }
    _getTemplate() {
        return document.querySelector(this._cardSelector).content;
    }
    /*_setEventListenerForHeartButton(){
        this.element.querySelector('.element__heart-button').addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__heart-button_active');
        });
    }
    _setEventListenerForDeleteButton() {
        this.element.querySelector('.element__delete-button').addEventListener('click', (evt) => {
            const targetElement = evt.target;
            targetElement.parentNode.remove();
        });
    }*/
}