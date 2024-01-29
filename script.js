document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    // You can perform additional login logic here
    showProfile(username);
  });
  
  function redirectToSignup() {
    window.location.href = "index.html"; // Assuming your signup page is named index.html
  }
  