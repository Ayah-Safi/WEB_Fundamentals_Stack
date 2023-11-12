function alwaysHungry(arr) {

    if(arr.includes("food"))
    {

    for(var i=0; i<arr.length; i++){
    if(arr[i] == "food"){
        console.log("Yummy")
    }
}
} 
else{
    console.log("I'm hungry")
} 
}

alwaysHungry([3.14, "food", "pie", true, "food"]);