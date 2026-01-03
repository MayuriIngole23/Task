window.onload = function () {
  const prefill = localStorage.getItem("loginPrefill");
  if (prefill) {
    document.getElementById("loginInput").value = prefill;
  }
};

function loginUser(event) {
  event.preventDefault();

  const input = document.getElementById("loginInput").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const savedUser = JSON.parse(localStorage.getItem("userData"));

  if (!savedUser) {
    document.getElementById("error").innerText =
      "No user found. Please register first.";
    return;
  }

  if (
    (input === savedUser.email || input === savedUser.phone) &&
    password === savedUser.password
  ) {
    window.location.href = "user.html";
  } else {
    document.getElementById("error").innerText =
      "Invalid login credentials!";
  }
}
