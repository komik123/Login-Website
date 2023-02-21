const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#id_password');
const eyeicon = document.getElementsByClassName('bi bi-eye')

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle(eyeicon);
});


