// Admin credentials — change here to update login/password
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'fastcat2024';
const AUTH_KEY = 'fc_admin_auth';

function checkAuth() {
  if (!sessionStorage.getItem(AUTH_KEY)) {
    window.location.replace('login.html');
  }
}

function doLogin(e) {
  e.preventDefault();
  const login = document.getElementById('authLogin').value.trim();
  const pass = document.getElementById('authPassword').value;
  if (login === ADMIN_LOGIN && pass === ADMIN_PASSWORD) {
    sessionStorage.setItem(AUTH_KEY, '1');
    window.location.replace('index.html');
  } else {
    const err = document.getElementById('authError');
    err.textContent = 'Неверный логин или пароль';
    err.style.display = 'block';
    document.getElementById('authPassword').value = '';
  }
}

function logout() {
  sessionStorage.removeItem(AUTH_KEY);
  window.location.replace('login.html');
}
