function login(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    document.getElementById("msg").innerText = "Please register first";
    return;
  }

  if (email === user.email && password === user.password) {
    localStorage.setItem("loggedIn", "true");
    window.location = "user.html";
  } else {
    document.getElementById("msg").innerText = "Invalid login";
  }
}
