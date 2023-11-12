
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
function randomPizza(crustType, sauceType, cheeses, toppings) {
    var pizaaArray = [
        pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]),
        pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]),
        pizzaOven("deep dish", "tomato", ["chdder","feta"],["pepperoni", "sausage"]),
        pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives"])
];
var randomIndx = Math.floor(Math.random()*4);
    return pizaaArray[randomIndx];
}
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"])
var p3 = pizzaOven("deep dish", "tomato", ["chdder","feta"],["pepperoni", "sausage"]);
var p4 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives"]);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log('randomPizza:', randomPizza());


