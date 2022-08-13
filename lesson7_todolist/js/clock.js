const clock = document.querySelector("h2#clock");

//function sayHello(){
//    console.log("Hello");
//}

//setInterval arguments:
// 1. function that I wanna run
// 2. repeat milli seconds
//setInterval(sayHello, 5000)

//setTimeout
// 1. function that I wanna run
// 2. waiting ms
//setTimeout(sayHello, 5000)


//h2에 현재 시간으로 시계만들기
//function getClock(){
//    const date = new Date();
//    console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
//    clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
//}

//padStart / padEnd
// string.padStart(x,"0") > x만큼의 길이가 아니라면 뒤의 0을 20길이만큼 string을 앞에 채움 / padEnd : 뒤에 채움

// 초분시가 한자리로 표현될때, 앞에 0을 입력
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock()
setInterval(getClock, 1000);