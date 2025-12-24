javascript;
document.getElementById("signupForm").addEventListener("submit", function (e) {
  const pwd = this.password.value;
  if (pwd.length < 6) {
    alert("Password must be at least 6 characters");
    e.preventDefault();
  }
});
