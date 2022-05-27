const input = document.querySelector('.email');
const message = document.querySelector('.invalid-email');
const button = document.querySelector('button');

button.addEventListener('click', function (e) {
  e.preventDefault();
  input.classList.remove('error-input');
  message.classList.remove('error-message');

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!input.value.match(emailRegex)) {
    input.classList.add('error-input');
    message.classList.add('error-message');
    message.innerText = 'Please provide a valid email address';
  }

  if (input.value === '') {
    message.innerText = 'Whoops! It looks like you forgot to add your email';
  }
});
