//Creating an array "Shopping list"
const shoppingList = [
  {
    productName: "Cinnabon", quantity: 1, bought: false, price: 25.0,
    sum: function getTotalSum() {
      return this.price * this.quantity;
    }
  },
  {
    productName: "Sugar", quantity: 1, bought: false, price: 4.9,
    sum: function getTotalSum() {
      return this.price * this.quantity;
    }
  },
  {
    productName: "Mascarpone", quantity: 2, bought: true, price: 10.3,
    sum: function getTotalSum() {
      return this.price * this.quantity;
    }
  },
  {
    productName: "Egg", quantity: 12, bought: false, price: 0.3,
    sum: function getTotalSum() {
      return this.price * this.quantity;
    }
  },
  {
    productName: "Cacao", quantity: 3, bought: false, price: 5.2,
    sum: function getTotalSum () {
      return this.price * this.quantity;
    }
  },
  {
    productName: "Coockies", quantity: 2, bought: true, price: 34.9,
    sum: function getTotalSum() {
      return this.price * this.quantity;
    }
  },
  {
    productName: "Coffee", quantity: 2, bought: false, price: 48.9,
    sum: function getTotalSum() {
      return this.price * this.quantity;
    }
  },
  {
    productName: "Amaretto", quantity: 1, bought: false, price: 118.9,
    sum: function getTotalSum() {
      return this.price * this.quantity;
    }
  }
];

function printshoppingList(shoppingList /*array*/) {
  const notBoughtList = document.getElementById("not-bought");
  const boughtList = document.getElementById("bought");

  notBoughtList.innerHTML = "";
  boughtList.innerHTML = "";
  
//КНОПКА СУМИ Отримуємо посилання на кнопку за її ідентифікатором
  // const sumButton = document.querySelectorAll("btn--amount");
// КНОПКА ВИДАЛЕННЯ
  const removeButton = document.querySelectorAll('.btn--delete_item');

  // Додати обробники подій до першого списку
  notBoughtList.addEventListener('click', moveItem);
  // Додати обробник подій до другого списку
  boughtList.addEventListener('click', deleteItem);
// Додати обробники подій до кнопок
// sumButton.forEach(button => {
//   button.addEventListener('click', moveItem);
// });
removeButton.forEach(button => {
  button.addEventListener('click', deleteItem);
});

  function moveItem(event) {
    // Перевірити, що було натиснуто на елемент li
    if (event.target.tagName === 'LI') {
      // Додати елемент до другого списку
      boughtList.appendChild(event.target);
    }
  }
  
  function deleteItem(event) {
    // Перевірити, що було натиснуто на елемент li (видаляє cаме по одному пункту)
    if (event.target.tagName === 'LI'|| event.target.tagName === 'BUTTON') { 
      // Видалити елемент з другого списку
      event.target.remove();
    }
    // Видалити елемент з другого списку
    const item = event.target.closest('li');
    if (item) {
      item.remove();
    }
  }

  for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];
    let listItem = document.createElement("li");
    listItem.textContent = item.productName;

    if (item.bought) {
      listItem.classList.add("bought");
      boughtList.appendChild(listItem);
      listItem.addEventListener("click", function () {
        item.bought = true;
        printshoppingList(shoppingList);
      });
    } else {
      item.bought = false;
      notBoughtList.appendChild(listItem);
    }
  }
}

printshoppingList(shoppingList);