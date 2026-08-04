JavaScript
function handleLogin(event) {
  event.preventDefault();
  // Set login flag in browser session
  sessionStorage.setItem('adminLoggedIn', 'true');
  // Redirect to admin portal
  window.location.href = 'admin.html';
}