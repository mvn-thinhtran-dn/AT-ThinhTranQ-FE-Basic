var products = {
  1 : {
    name : 'Iphone 11',
    desc : '64 GB, new 100%.',
    img : './img/img-phone/ip11.jpeg',
    price : 950
  },

  2 : {
    name : 'Iphone 11 Pro',
    desc : '64 GB, new 100%.',
    img : './img/img-phone/ip11pro.jpeg',
    price : 1247
  },

  3 : {
    name : 'Iphone 11 Pro Max',
    desc : '64 GB, new 100%.',
    img : './img/img-phone/ip11promax.jpeg',
    price : 1400
  },

  4 : {
    name : 'Iphone XS Max',
    desc : '64 GB, new 100%.',
    img : './img/img-phone/ipxsmax.jpeg',
    price : 900
  },

  5 : {
    name : 'Samsung Note 10',
    desc : '128 GB, new 100%.',
    img : './img/img-phone/note10.jpeg',
    price : 650
  },

  6 : {
    name : 'Samsung Note 10 Plus',
    desc : '512 GB, new 100%.',
    img : './img/img-phone/note10plus.jpeg',
    price : 1200
  },

  7 : {
    name : 'Samsung s10',
    desc : '64 GB, new 100%.',
    img : './img/img-phone/s10.jpeg',
    price : 600
  },

  8 : {
    name : 'Samsung s10 Plus',
    desc : '128 GB, new 100%.',
    img : './img/img-phone/s10plus.jpeg',
    price : 840
  }
};

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
      if (cart.data[this.dataset.id] == undefined) {
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