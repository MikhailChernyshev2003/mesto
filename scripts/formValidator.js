export default class FormValidator{
    constructor(setting, formElement){
        this._formElement = formElement;
        this._inputSelector = setting.inputSelector;
        this._submitButtonSelector = setting.submitButtonSelector;
        this._inactiveButtonClass = setting.inactiveButtonClass;
        this._inputErrorClass = setting.inputErrorClass;
        this._errorClass = setting.errorClass;    
    }
    _showInputError(inputElement, errorElement, errorMessage) {
        // errorElement ищется и определяется в функции _checkInputValidity
        // добавить стиль для элемента с ошибкой
        inputElement.classList.add(this._inputErrorClass);
        // заменяет текст ошибки на ...
        errorElement.textContent = errorMessage;
        // показывает новое сообщение об ошике (модификатор со стилем ошибки)
        errorElement.classList.add(this._errorClass);
    };
    
      // скрытие ошибок валидации (удаление сподписи)
    _hideInputError(inputElement, errorElement) {
        // удалить стиль ошибки (красная рамка и т.д.)
        inputElement.classList.remove(this._inputErrorClass);
        // удалить у спана модификатор выводящий ошибку (сделать его не активным)
        errorElement.classList.remove(this._errorClass);
        // пустое поле ошибки
        errorElement.textContent = '';
    };
    
      // валидация input
    _checkInputValid(inputElement) {
        // найти элемент у которого ошибка
        // const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        if (!inputElement.validity.valid) {
          // если не валидно ошибку показать
            this._showInputError(inputElement, errorElement, inputElement.validationMessage);
        } else {
          // если валидно скрыть ошибку
            this._hideInputError(inputElement, errorElement);
        };
    };
    
      // валидация всех полей (есть/нет ошибки)
    _checkInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };
    
      //блокировка кнопки (так же добавить ей прозрачность)
    _toggleButtonOpacity(inputList, buttonElement) {
        if (this._checkInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        };
    };
    
      // добавить формам слушателей
    _setEventListenerForForm() {
        // получим массив из всех input в inputList
        const inputArray = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        // кнопка ввода
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        // неактивная кнопка по умолчанию
        this._toggleButtonOpacity(inputArray, buttonElement);
        // пройдемся по каждому элементу массива
        inputArray.forEach((inputElement) => {
          // добавить каждому элементу слушатель ввода
            inputElement.addEventListener("input", () => {
                this._checkInputValid(inputElement);
            // динамическая проверка
                this._toggleButtonOpacity(inputArray, buttonElement);
            });
        });
    };
    
      // валидация
    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault(); // У каждой формы отменим стандартное поведение
        });
        this._setEventListeners(); // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
    }
}