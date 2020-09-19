/*const enableValidation = function ({formSelector, ...other}) {
    const formArray = Array.from(document.querySelectorAll(formSelector));
    formArray.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListenerForForm(other, formElement);
    });
};

const hideInputError = function ({inputErrorClass, errorClass}, formElement, inputElement) {
    const errorMessage = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorMessage.classList.remove(errorClass);
    errorMessage.textContent = '';
};

const showInputError = function ({inputErrorClass, errorClass}, formElement, inputElement, errorText) {
    const errorMessage = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorMessage.classList.add(errorClass);
    errorMessage.textContent = errorText;    
};
  
const toggleButtonOpacity = function ({inactiveButtonClass}, inputList, buttonElement) {
    if (checkInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    }
    else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    };
};

const setEventListenerForForm = function ({submitButtonSelector, inputSelector, ...other}, formElement) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonOpacity(other, inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValid(other, formElement, inputElement);
            toggleButtonOpacity(other, inputList, buttonElement);
        });
    });
};

const checkInputValid = function ({inputErrorClass, errorClass}, formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError({ inputErrorClass, errorClass }, formElement, inputElement, inputElement.validationMessage);
    } 
    else {
        hideInputError({ inputErrorClass, errorClass }, formElement, inputElement);
    };
};
  
const checkInvalidInput = function (inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};
    
enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__container-input',
    submitButtonSelector: '.popup__container-button',
    inactiveButtonClass: 'popup__container-button_disabled',
    inputErrorClass: 'popup__container-input_error',
    errorClass: 'popup__error_visible'
});*/
  

