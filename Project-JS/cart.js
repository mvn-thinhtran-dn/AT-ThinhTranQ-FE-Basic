/* SHOPPING CART */
var cart = {
  data : null,

  load : function(){
    cart.data = localStorage.getItem('cart');
    if (cart.data == null) { cart.data = {}; }
    else { cart.data = JSON.parse(cart.data); }
  },

  save : function(){
    localStorage.setItem('cart', JSON.stringify(cart.data));
  },

  list : function(){

    var container = document.getElementById('cart-list'),
        item = null, part = null, product = null, table = null;
    container.innerHTML = '';

    // Empty cart
    var isempty = function(obj){
      for (var key in obj) {
        if(obj.hasOwnProperty(key)) { return false; }
      }
      return true;
    };
    if (isempty(cart.data)) {
      item = document.createElement('tr');
      item.innerHTML = 'Cart is empty';
      container.appendChild(item);
    }

    else {
      // List items
      var total = 0, subtotal = 0;
      for (var i in cart.data) {
        item = document.createElement('tr');
        item.classList.add('c-item');
        product = cart.data[i];

        // Name
        table = document.createElement('td');
        part = document.createElement('span');
        part.innerHTML = product['name'];
        part.classList.add('c-name');
        table.appendChild(part);
        item.appendChild(table);

        // Product Price
        table = document.createElement('td');
        part = document.createElement('span');
        part.innerHTML = '$' + product['price'];
        part.classList.add('c-price');
        table.appendChild(part);
        item.appendChild(table);

        // Quantity
        table = document.createElement('td');
        part = document.createElement('input');
        part.type = 'number';
        part.value = product['qty'];
        part.dataset.id = i;
        part.classList.add('c-qty');
        part.addEventListener('change', cart.change);
        table.appendChild(part);
        item.appendChild(table);

        // Subtotal
        table = document.createElement('td');
        subtotal = product['qty'] * product['price'];
        total += subtotal;
        part = document.createElement('span');
        part.innerHTML = '$' + subtotal;
        part.classList.add('c-subtotal');
        table.appendChild(part);
        item.appendChild(table);

        container.appendChild(item);

        // Delete
        table = document.createElement('td');
        part = document.createElement('button');
        part.classList.add('c-delete');
        part.innerHTML = 'X';
        part.dataset.id = i;
        part.addEventListener('click', cart.delete);
        table.appendChild(part);
        item.appendChild(table);
      }

      // CHECKOUT TOTAL
      table = document.createElement('td');
      part = document.createElement('span');
      part.innerHTML = 'Total:';
      table.appendChild(part);
      item.appendChild(table);

      table = document.createElement('td');
      part = document.createElement('span');
      part.innerHTML = '$' + total;
      part.classList.add('c-total');
      table.appendChild(part);
      item.appendChild(table);
    }
  },

  change : function() {
  // change() : change quantity

    if (this.value == 0) {
      delete cart.data[this.dataset.id];
    } else {
      cart.data[this.dataset.id]['qty'] = this.value;
    }
    cart.save();
    cart.list();
  },

  delete : function() {
    delete cart.data[this.dataset.id];
    cart.save();
    cart.list();
  }

};

// Load previous cart and update HTML on load
window.addEventListener('load', function(){
  cart.load();
  cart.list();
});