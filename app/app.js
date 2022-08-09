//접근방법 1 : div id를 찾아서 접근
//접근방법 2 : div id안의 엘레멘트를 찾아 접근
//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input"); 
//const loginButton = loginForm.querySelector("button"); 

//접근방법 3 : document를 통해 #경로 입력, 접근
const loginInput = document.querySelector("#login-form input"); 

const loginForm = document.querySelector("#login-form")
const loginButton = document.querySelector("#login-form button"); 

/*
function onLoginBtnClick(){
    //입력된 input에서 value만 출력
    //console.dir(loginInput.value); 

    //test validate input length
    if(username == ""){
        alert("Please write your name")
    }else if(username.length > 15){
        alert("Your name is too long.")
    }
}


//form을 html에서 생성한 이후에는 엔터시 input제출됨.
//따라서 loginButton에 리스너를 달아두는 것이 아닌 폼으로 변경
//loginButton.addEventListener("click", onLoginBtnClick);
*/


//브라우저는 엔터를 눌렀을때 새로고침을 하고 form을 submit
function onLoginSubmit(event){
    
    //preventDefault() : 디폴트 동작을 막음
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit)

