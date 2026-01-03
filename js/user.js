
if (localStorage.getItem("loggedIn") !== "true") {
  window.location = "login.html";
}

let user = JSON.parse(localStorage.getItem("user"));

document.getElementById("vName").innerText = user.name;
document.getElementById("vAge").innerText = user.age;
document.getElementById("vPhone").innerText = user.phone;
document.getElementById("vEmail").innerText = user.email;
document.getElementById("vAddress").innerText = user.address;
document.getElementById("vPincode").innerText = user.pincode;

function editProfile() {
  document.getElementById("view").style.display = "none";
  document.getElementById("edit").style.display = "block";

  document.getElementById("eName").value = user.name;
  document.getElementById("eAge").value = user.age;
  document.getElementById("ePhone").value = user.phone;
  document.getElementById("eEmail").value = user.email;
  document.getElementById("eAddress").value = user.address;
  document.getElementById("ePincode").value = user.pincode;
}

function saveProfile() {
  user.name = document.getElementById("eName").value;
  user.age = document.getElementById("eAge").value;
  user.phone = document.getElementById("ePhone").value;
  user.address = document.getElementById("eAddress").value;
  user.pincode = document.getElementById("ePincode").value;

  localStorage.setItem("user", JSON.stringify(user));
  location.reload();
}

function cancelEdit() {
  document.getElementById("edit").style.display = "none";
  document.getElementById("view").style.display = "block";
}

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("msg").innerText = "";
}

function changePassword() {
  let newPass = document.getElementById("newPass").value;
  let confirmPass = document.getElementById("confirmPass").value;
  let checked = document.getElementById("confirmCheck").checked;

  if (!checked) {
    document.getElementById("msg").innerText = "Please confirm checkbox";
    return;
  }

  if (newPass === "" || confirmPass === "") {
    document.getElementById("msg").innerText = "Password cannot be empty";
    return;
  }

  if (newPass !== confirmPass) {
    document.getElementById("msg").innerText = "Passwords do not match";
    return;
  }

  user.password = newPass;
  localStorage.setItem("user", JSON.stringify(user));
  alert("Password updated successfully");
  closePopup();
}

// LOGOUT
function logout() {
  localStorage.clear();
  window.location = "login.html";
}
