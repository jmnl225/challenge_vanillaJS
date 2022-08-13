const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos(){
    //값을 string으로 바꿔서 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    //event.target을 통해서 현재 받은 이벤트의 부모노드를 확인할 수 있음.
    //console.dir(event.target.parentElement.innerText);

    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//function sayHello(item){
//    console.log("This is the turn off " + item);
//}

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // = parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}