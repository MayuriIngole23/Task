function register(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let pincode = document.getElementById("pincode").value;
  let password = document.getElementById("password").value;

  if (
    name === "" || age === "" || phone === "" ||
    email === "" || address === "" || pincode === "" || password === ""
  ) {
    document.getElementById("msg").innerText = "All fields are required";
    return;
  }

  if (phone.length !== 10) {
    document.getElementById("msg").innerText = "Phone number must be 10 digits";
    return;
  }

  if (pincode.length !== 6) {
    document.getElementById("msg").innerText = "Pincode must be 6 digits";
    return;
  }

  let user = {
    name,
    age,
    phone,
    email,
    address,
    pincode,
    password
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("loggedIn", "true");

  window.location = "login.html";
}
