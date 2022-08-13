const greeting = document.querySelector("#greeting");
const loginInput = document.querySelector("#login-form input"); 
const loginForm = document.querySelector("#login-form")
const loginButton = document.querySelector("#login-form button"); 

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  console.log("name null~!~!")
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}