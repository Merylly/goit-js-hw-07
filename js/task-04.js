const loginForm = document.querySelector(".login-form");
const form = loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const elems = event.target.elements;
  const EmailTrim = elems.email.value.trim();
  const PassTrim = elems.password.value.trim();

  if (!EmailTrim || !PassTrim) {
    alert("All form fields must be filled in");
  } else {
    const newArr = {
      email: EmailTrim,
      password: PassTrim,
    };

    console.log(newArr);
    loginForm.reset();
  }
});
