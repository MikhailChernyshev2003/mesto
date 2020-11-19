export default class FormValidator{
    constructor(validationSettings, formElement){
        this._formElement = formElement;
        this._inputSelector = validationSettings.inputSelector;
        this._submitButtonSelector = validationSettings.submitButtonSelector;
        this._inactiveButtonClass = validationSettings.inactiveButtonClass;
        this._inputErrorClass = validationSettings.inputErrorClass;
        this._spanClass = validationSettings.spanClass;
        this._errorClass = validationSettings.errorClass;    
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }
    
    _hideInputError(inputElement, errorElement) {
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _showInputError(inputElement, errorElement, errorMessage) {
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };
    
    _toggleButtonOpacity(inputList, buttonElement) {
        if (this._checkInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        };
    };

    _setEventListenerForForm() {
        this._toggleButtonOpacity(this._inputList, this._buttonElement);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValid(inputElement);
                this._toggleButtonOpacity(this._inputList, this._buttonElement);
            });
        });
    };
    
    _checkInputValid(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, errorElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement, errorElement);
        };
    };
    
    _checkInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    removeError() {
        this._formElement.querySelectorAll(this._spanClass).forEach((span) => {
          span.classList.remove(this._errorClass);
          span.textContent = "";
        });
        this._formElement.querySelectorAll(this._inputSelector).forEach((input) => {
          input.classList.remove(this._inputErrorClass);
        });
        this._toggleButtonOpacity(this._inputList, this._buttonElement);
    }
      
    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault(); 
        });
        this._setEventListenerForForm();
    }
}
