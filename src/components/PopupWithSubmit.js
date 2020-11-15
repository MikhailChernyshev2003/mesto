import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            if(this._confirm) {
                this._confirm();
            }
        })
    }

    push(confirm) {
        this._confirm = confirm;
    }
}