export default class Popup {

    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }
  
    open() {
        this._popupSelector.classList.add("popup_opened");
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    }
  
    close() {
        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
    }
  
    _handleEscClose(evt) {
        if (evt.keyCode === escCode) {
            this.close();
        }
    }
  
    _handleOverlayClick(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }
  
    setEventListeners() {
        this._popupSelector.querySelector(".popup__close-button").addEventListener('click', this.close.bind(this));
        this._popupSelector.addEventListener('click', this._handleOverlayClick.bind(this));
    }
}