import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
        this._popupImg = document.querySelector(".popup__image");
        this._popupTitle = document.querySelector(".popup__text");
    }

    open(card) {
        super.open();
        this._popupImg.src = card.link;
        this._popupImg.alt = card.name;
        this._popupTitle.textContent = card.name;
    }
}