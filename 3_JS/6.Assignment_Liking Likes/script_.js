var number = document.querySelector(".number");

function increaseLikes() {
  var likes_current_number = Number(number.innerText);
  number.innerText =  likes_current_number +1;
}   