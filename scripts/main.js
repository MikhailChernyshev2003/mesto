let popup = document.querySelector(".popup");
let OpenButton = document.querySelector(".profile__edit-button")
let CloseButton = popup.querySelector(".popup__close-button");
let SaveButton = popup.querySelector(".popup__container-button");
let inputName = popup.querySelector("#name");
let inputJob = popup.querySelector("#job");
let name = document.querySelector(".profile__name");
let job = document.querySelector(".profile__status");

//console.log(popup, CloseButton, SaveButton, inputName, OpenButton, inputJob,name, job);

let popupToggle = function (evt) {
    popup.classList.toggle('popup_opened');
}
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    job.textContent = inputJob.value;
    name.textContent = inputName.value;
}
SaveButton.addEventListener('click', formSubmitHandler); 

OpenButton.addEventListener('click', popupToggle);
CloseButton.addEventListener('click', popupToggle);