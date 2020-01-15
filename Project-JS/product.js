window.addEventListener('load', function(){
  var container = document.getElementById('cart-products'),
      item = null, part = null;
  for (var i in products) {
    item = document.createElement('div');
    item.classList.add('p-item');

    // Product Image
    part = document.createElement('img');
    part.src = products[i]['img'];
    part.classList.add('p-img');
    item.appendChild(part);

    // Product Name
    part = document.createElement('div');
    part.innerHTML = products[i]['name'];
    part.classList.add('p-name');
    item.appendChild(part);

    // Product Price
    part = document.createElement('div');
    part.innerHTML = '$' + products[i]['price'];
    part.classList.add('p-price');
    item.appendChild(part);

    // Product Description
    part = document.createElement('div');
    part.innerHTML = products[i]['desc'];
    part.classList.add('p-desc');
    item.appendChild(part);

    // Add to cart
    part = document.createElement('input');
    part.type = 'button';
    part.value = 'Add to Cart';
    part.classList.add('p-add');
    part.onclick = cart.add;
    part.dataset.id = i;
    item.appendChild(part);

    container.appendChild(item);
  }
});


var cart = {
  data : null, // current shopping cart

  load : function() {
    cart.data = localStorage.getItem('cart');
    if (!cart.data) { cart.data = {}; }
    else { cart.data = JSON.parse(cart.data); }
  },
  save : function() {
    localStorage.setItem('cart', JSON.stringify(cart.data));
  },

  add : function() {
    if (cart.data[this.dataset.id] === undefined) {
      var product = products[this.dataset.id];
      cart.data[this.dataset.id] = {
        name : product['name'],
        desc : product['desc'],
        img : product['img'],
        price : product['price'],
        qty : 1
      };
    } else {
      cart.data[this.dataset.id]['qty']++;
    }
    cart.save();
  },
};

window.addEventListener('load', function() {
  cart.load();
  cart.save();
});