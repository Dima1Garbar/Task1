const toggleTheme = document.getElementById('header__nav-theme');

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    toggleTheme.textContent = '☀️';
  } else {
    toggleTheme.textContent = '🌙';
  }
});
