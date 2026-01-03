function registerUser(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const password = document.getElementById("password").value.trim();

  if (name === "" || email === "" || password === "") {
    document.getElementById("error").innerText =
      "Name, Email and Password are required!";
    return;
  }

  if (localStorage.getItem("userData")) {
    alert("User already registered. Please login.");
    return;
  }

  const user = {
    name,
    age,
    phone,
    email,
    address,
    pincode,
    password
  };

  localStorage.setItem("userData", JSON.stringify(user));
  localStorage.setItem("loginPrefill", email);

  window.location.href = "login.html";
}
