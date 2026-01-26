const toggleTheme = document.getElementById('header__nav-theme');
const openBtn = document.getElementById('registerOpenModal');
const modal = document.getElementById('registerModal');
const closeModal = document.getElementById('modalCancel');
const submitModal = document.getElementById('modalSubmit');
const form = document.getElementById('registerForm');
const eye = document.getElementById('passwordEye');
const modalPassword = document.getElementById('modalPassword');


eye.addEventListener('click', () => {
  if (!eye.classList.contains('active-Eye')){
      eye.classList.add('active-Eye')
      modalPassword.type = 'text';
  } else {
      eye.classList.remove('active-Eye')
      modalPassword.type = 'password';
    }
})

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    toggleTheme.textContent = '☀️';
  } else {
    toggleTheme.textContent = '🌙';
  }
});


openBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    form.reset();
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        form.reset();
    }
});


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = {
    user: formData.get('name'),
    surname: formData.get('surname'),
    email: formData.get('email'),
    password: formData.get('password')
  };

  console.log(data)
});
