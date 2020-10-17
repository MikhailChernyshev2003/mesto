import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._popupForm = this._popupSelector.querySelector(".popup__container");
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll(".popup__constainer-input");
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit(this._getInputValues());
            this.close();
        })
    }
}