let users = [];

let inpName = document.querySelector(".inp1");
let inpAge = document.querySelector(".inp2");
let inpEmail = document.querySelector(".inp3");
let inpPhone = document.querySelector(".inp4");

let select = document.querySelector("select");

let pass1 = document.querySelector(".inpPass1");
let pass2 = document.querySelector(".inpPass2");

let btnRegister = document.querySelector(".btnRegister");
let btnShow = document.querySelector(".btnShow");

let out = document.querySelector(".out");
let userOut = document.querySelector(".user-out");

btnRegister.onclick = () => {
  if (pass1.value !== pass2.value) {
    alert("❌ Паролі не співпадають!");
    return;
  }

  let newUser = {
    name: inpName.value,
    age: inpAge.value,
    email: inpEmail.value,
    phone: inpPhone.value,
    gender: select.value,
  };

  users.push(newUser);
  alert("✅ Користувача додано!");
  updateUserCount();
  clearInputs();
};

btnShow.onclick = () => {
  out.innerHTML = "";
  users.map((user) => {
    let imgSrc = "img/default.png";
    if (user.gender === "m") imgSrc = "img/man.png";
    else if (user.gender === "w") imgSrc = "img/woman.png";

    out.innerHTML += `
        <div class="user-card">
          <img src="${imgSrc}" width="100" alt="avatar">
          <h3>${user.name}</h3>
          <p>Age: ${user.age}</p>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
        </div>
      `;
  });
};

function updateUserCount() {
  userOut.innerHTML = users.length;
}

function clearInputs() {
  inpName.value = "";
  inpAge.value = "";
  inpEmail.value = "";
  inpPhone.value = "";
  pass1.value = "";
  pass2.value = "";
  select.value = "-";
}
