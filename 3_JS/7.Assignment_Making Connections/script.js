var hide = document.querySelector(".person-1");
var hidetwo = document.querySelector(".person-2");
var userName = document.querySelector(".my-name");
var number = document.querySelector(".number-500");
console.log(number)

function hideRequest(){
   hide.remove();
}

function hideRequestTwo(){
    hidetwo.remove();
}

function changeName(){
    userName.innerHTML = "Yazan" ;
}

function increaseValue(){
   number.innerHTML = (Number (number.innerText)) +1;
   console.log("HERE");

}