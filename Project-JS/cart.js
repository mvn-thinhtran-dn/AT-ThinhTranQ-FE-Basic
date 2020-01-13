/* SHOPPING CART */
var cart = {
  data : null,

  /* LOCALSTORAGE */
  load : function(){
    cart.data = localStorage.getItem('cart');
    if (cart.data == null) { cart.data = {}; }
    else { cart.data = JSON.parse(cart.data); }
  },

  save : function(){
    localStorage.setItem('cart', JSON.stringify(cart.data));
  },

  list : function(){
  // list() : update HTML

    var container = document.getElementById('cart-list'),
        item = null, part = null, product = null;
    container.innerHTML = '';

    // Empty cart
    var isempty = function(obj){
      for (var key in obj) {
        if(obj.hasOwnProperty(key)) { return false; }
      }
      return true;
    };
    if (isempty(cart.data)) {
      item = document.createElement('div');
      item.innerHTML = 'Cart is empty';
      container.appendChild(item);
    }

    // Not empty
    else {
      // List items
      var total = 0, subtotal = 0;
      for (var i in cart.data) {
        item = document.createElement('div');
        item.classList.add('c-item');
        product = cart.data[i];

        // Name
        part = document.createElement('span');
        part.innerHTML = product['name'];
        part.classList.add('c-name');
        item.appendChild(part);

        // Product Description
        part = document.createElement('span');
        part.innerHTML = product['desc'];
        part.classList.add('c-desc');
        item.appendChild(part);

        // Quantity
        part = document.createElement('input');
        part.type = 'number';
        part.value = product['qty'];
        part.dataset.id = i;
        part.classList.add('c-qty');
        part.addEventListener('change', cart.change);
        item.appendChild(part);
        
        // Product Price
        part = document.createElement('span');
        part.innerHTML = '$' +product['price'];
        part.classList.add('c-price');
        item.appendChild(part);

        // Subtotal
        subtotal = product['qty'] * product['price'];
        total += subtotal;
        container.appendChild(item);
      }

      // // EMPTY BUTTONS
      // item = document.createElement("input");
      // item.type = "button";
      // item.value = "Empty";
      // item.addEventListener("click", cart.reset);
      // item.classList.add("c-empty");
      // container.appendChild(item);

      // CHECKOUT BUTTONS
      item = document.createElement("span");
      item.type = "total";
      item.value = "Checkout - " + "$" + total;
      item.classList.add("c-checkout");
      container.appendChild(item);
    }
  },

  change : function(){
  // change() : change quantity

    if (this.value == 0) {
      delete cart.data[this.dataset.id];
    } else {
      cart.data[this.dataset.id]['qty'] = this.value;
    }
    cart.save();
    cart.list();
  },
};

// Load previous cart and update HTML on load
window.addEventListener("load", function(){
  cart.load();
  cart.list();
});