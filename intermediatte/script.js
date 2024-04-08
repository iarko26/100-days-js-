let name = document.getElementById('form-name');
let email = document.getElementById('form-email');
let pass = document.getElementById('form-pass');
let btn = document.getElementById('submit-btn');
let form = document.querySelector('.form');
let successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(validateform()){
    showSuccessMessage();

  }
});

const validateform = () => {
  let nameValue = name.value.trim();
  let emailValue = email.value.trim();
  let passValue = pass.value.trim();

  let isValid = true;

  if (nameValue === '') {
    setError(name, 'Name cannot be blank');
    isValid = false;
  } else if (!isValidName(nameValue)) {
    setError(name, 'Name must contain only letters and whitespace');
    isValid = false;
  } else {
    setSuccess(name);
  }

  if (emailValue === '') {
    setError(email, 'Email cannot be blank');
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Email is not valid');
    isValid = false;
  } else {
    setSuccess(email);
  }

  if (passValue === '') {
    setError(pass, 'Password cannot be blank');
    isValid = false;
  } else if (!isValidPassword(passValue)) {
    setError(pass, 'Password is not valid');
    isValid = false;
  } else {
    setSuccess(pass);
  }

  if(isValid){
    form.innerHTML = '<h1>Form Submitted Successfully</h1>';

  }
  else{
    return false;
  }
};

const isValidEmail = (email) => {
  return  /^\w+([\.-]?\w*[0-9]\w*)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const isValidName = (name) => {
  return /^[a-zA-Z\s]+$/.test(name);
};

const isValidPassword = (password) => {
  return password.length >= 6 && /[a-z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);
};

let setError = (input, message) => {
  let formControl = input.parentElement;
  let errorDisplay = formControl.querySelector('.error');
  errorDisplay.textContent = message;
  formControl.classList.add('error');
  formControl.classList.remove('success');
};

let setSuccess = (input) => {
  let formControl = input.parentElement;
  let errorDisplay = formControl.querySelector('.error');
  errorDisplay.textContent = '';
  formControl.classList.add('success');
  formControl.classList.remove('error');
};
const showSuccessMessage = () => {
    successMessage.classList.add('visible');
    setTimeout(()=>{
        successMessage.classList.remove('visible');

    },3000);
}