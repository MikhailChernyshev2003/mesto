export default class Card{
    constructor(link, title){
        this._createElement(link, title);
        this._setEventListenerForHeartButton();
    }
    getElement(){
        return this.element;
    }
    _createElement(link, title) {
        const elementTemplate = document.querySelector('#element').content;
        const element = elementTemplate.cloneNode(true);
        const image = element.querySelector('.element__image');
        element.querySelector('.element__paragraph').textContent = title;
        image.src = link;
        image.alt = title;
        image.addEventListener('click', function () {
            document.querySelector('.popup__text').textContent = title;
            documentImage.src = link;
            documentImage.alt = title;
            togglePopup(imgPopup);
            setEventListenerForEsc();
        });    
        this.element = element;
    }
    _setEventListenerForHeartButton(){
        this.element.querySelector('.element__heart-button').addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__heart-button_active');
        });
    }
    _setEventListenerForDeleteButton = function (card) {
        card.querySelector('.element__delete-button').addEventListener('click', (evt) => {
            const targetElement = evt.target;
            targetElement.parentNode.remove();
        });
    }
}