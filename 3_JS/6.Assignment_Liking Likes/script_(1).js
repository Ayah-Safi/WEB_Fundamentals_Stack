function increaseLikes(id) {
    var element = document.querySelector("#" + id);
    var likes_current_number = Number(element.innerText);
    element.innerHTML = likes_current_number+1;
}
