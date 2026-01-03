const user = JSON.parse(localStorage.getItem("userData"));

if (!user) {
  window.location.href = "login.html";
}

document.getElementById("name").innerText = user.name;
document.getElementById("age").innerText = user.age;
document.getElementById("phone").innerText = user.phone;
document.getElementById("email").innerText = user.email;
document.getElementById("address").innerText = user.address;
document.getElementById("pincode").innerText = user.pincode;

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
