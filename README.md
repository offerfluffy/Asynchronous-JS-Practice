## 🔄 Synchronous vs Asynchronous

### 🔹 Synchronous Code:

Executes **top to bottom**, one line at a time. Nothing else happens until the current line finishes.

```js
console.log("1");
console.log("2");
```

This will print:

```
1
2
```

### 🔹 Asynchronous Code:

Allows **non-blocking execution** — some actions (like network requests or timers) are handled "in the background," and JavaScript continues with the rest of the code.

---

## ✅ Your First Example (Commented-out)

```js
function orderPizza() {
  console.log("Order pizza");           // 1

  setTimeout(() => {
    pizza = "PIZZA";
    console.log(`${pizza} is ready`);  // 5 (executed after 2s)
  }, 2000);

  console.log("Pizza was ordered");     // 2
}

orderPizza();
console.log("Call friend");             // 3
console.log(`Eat ${pizza}`);           // 4 (undefined!)
```

### 🧠 What’s Happening?

* JS starts by calling `orderPizza()`.
* It logs "Order pizza".
* It schedules the `setTimeout` for 2 seconds **in the background**.
* Logs "Pizza was ordered".
* Then JS immediately logs "Call friend" and "Eat undefined" because `pizza` hasn't been assigned yet.
* After 2 seconds, the `setTimeout` callback runs and logs "PIZZA is ready".

➡️ **Issue**: Code that depends on the pizza being ready (`Eat ${pizza}`) runs **before** the pizza is ready.

---

## ✅ Fixed Version Using a Callback

```js
function orderPizza(callback) {
  console.log("Order pizza");         // 1
  setTimeout(() => {
    const pizza = "PIZZA";
    callback(pizza);                  // pizzaReady(pizza)
  }, 2000);
  console.log("Pizza was ordered");   // 2
}

function pizzaReady(pizza) {
  console.log(`Eat ${pizza}`);        // 4
}

orderPizza(pizzaReady);
console.log("Call Friend");           // 3
```

### 💡 Explanation:

* `orderPizza` accepts a function `callback`.
* Once pizza is ready (after 2 seconds), it **calls back** `pizzaReady` with the pizza.
* Now `Eat PIZZA` happens **only after** the pizza is ready.

---

## 🌀 Callback Hell

```js
thing1(() => {
  thing2(() => {
    thing3(() => {
      // deeply nested code
    });
  });
});
```

### 😵 What Is Callback Hell?

* When many asynchronous operations are chained using callbacks,
* It leads to **deeply nested** code that is **hard to read and maintain**.

### 🔧 Solution:

To fix **callback hell**, we now often use:

* **Promises**
* **`async/await`**

---

## ⚡ Summary

| Concept             | Explanation                                                  |
| ------------------- | ------------------------------------------------------------ |
| **Synchronous**     | Code runs line-by-line, one after another.                   |
| **Asynchronous**    | Some tasks (like `setTimeout`) happen in the background.     |
| **Callback**        | A function passed to another function, to be run later.      |
| **Callback Hell**   | Many nested callbacks leading to hard-to-read code.          |
| **Better approach** | Use Promises or `async/await` to handle async logic cleanly. |
