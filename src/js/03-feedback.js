import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const LS_KEY = "feedback-form-state";

const formData = JSON.parse(localStorage.getItem(LS_KEY)) ?? { email: "", message: "" };

email.value = formData.email;
message.value = formData.message;


form.addEventListener("input", throttle(handlerFormInput, 500));
form.addEventListener("submit", throttle(handlerFormSubmit, 500));

function handlerFormInput() {
    formData.email = email.value;
    formData.message = message.value;
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function handlerFormSubmit (evt) {
    evt.preventDefault(); 
    localStorage.removeItem(LS_KEY);
    form.reset();
  
};

