
const loginInput = document.querySelector("#login-form input"); 
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")

const link = document.querySelector("a")

const HIDDEN_CLASSNAME = "hidden" //이름은 대문자로 저장
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); //input submit을 한 이후 input을 안보이게 함
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)

    console.log(username);
}

function paintGreetings(){
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greetings
    paintGreetings(savedUsername)
}

/*
//링크의 기본동작 : 클릭 - 이동
//링크 동작 막기
function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}


link.addEventListener("click", handleLinkClick)
*/