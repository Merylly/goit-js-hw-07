const loginForm = document.querySelector(".login-form");
const form = loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const elems = event.target.elements;
  const emailTrim = elems.email.value.trim();
  const passTrim = elems.password.value.trim();

  if (!emailTrim || !passTrim) {
    alert("All form fields must be filled in");
  } else {
    const newArr = {
      email: emailTrim,
      password: passTrim,
    };

    console.log(newArr);
    loginForm.reset();
  }
});
