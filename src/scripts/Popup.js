export default class Popup {

    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
        this._handleEscClose = this._handleEscClose.bind(this)
    }
  
    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown', this._handleEscClose);
    }
  
    close() {
        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
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
        this._popup.querySelector(".popup__close-button").addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('click', this._handleOverlayClick.bind(this));
    }
}