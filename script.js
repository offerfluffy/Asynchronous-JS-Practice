let pizza;

// Terrible
/* 
function orderPizza() {
  console.log("Order pizza"); // 1

  setTimeout(() => {
    pizza = "PIZZA";
    console.log(`${pizza} is ready`); // 5
  }, 2000);

  console.log("Pizza was ordered"); // 2
}

orderPizza();
console.log("Call friend"); // 3
console.log(`Eat ${pizza}`); // 4
*/

function orderPizza(callback) {
  console.log("Order pizza"); // 1

  setTimeout(() => {
    const pizza = "PIZZA";
    callback(pizza);
  }, 2000);

  console.log("Pizza was ordered"); // 2
}

function pizzaReady(pizza) {
  console.log(`Eat ${pizza}`); // 4
}

orderPizza(pizzaReady);
console.log("Call Friend"); // 3

// CallBack Hell

function thing1(callback) {
  // Call to PizzaHut
  callback()
}

function thing2(callback) {
  // Wait for Pizza
  callback()
}

function thing3(callback) {
  // Eat pizza
  callback()
}

thing1(
  () => {
    thing2(
      () => {
        thing3(
          () => {

          }
        ) 
      }
    )
  }
)