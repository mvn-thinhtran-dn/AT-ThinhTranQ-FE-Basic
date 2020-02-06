var products = [
  {
    id: 'Iphone-11',
    desc: '64 GB, new 100%.',
    img: './img/img-phone/ip11.jpeg',
    price: 950
  },
  {
    id: 'Iphone-11-Pro',
    desc: '64 GB, new 100%.',
    img: './img/img-phone/ip11pro.jpeg',
    price: 1247
  },
  {
    id: 'Iphone-11-Pro-Max',
    desc: '64 GB, new 100%.',
    img: './img/img-phone/ip11promax.jpeg',
    price: 1400
  },
  {
    id: 'Iphone-XS-Max',
    desc: '64 GB, new 100%.',
    img: './img/img-phone/ipxsmax.jpeg',
    price: 900
  },
  {
    id: 'Samsung-Note-10',
    desc: '128 GB, new 100%.',
    img: './img/img-phone/note10.jpeg',
    price: 650
  },
  {
    id: 'Samsung-Note-10-Plus',
    desc: '512 GB, new 100%.',
    img: './img/img-phone/note10plus.jpeg',
    price: 1200
  },
  {
    id: 'Samsung-s10',
    desc: '64 GB, new 100%.',
    img: './img/img-phone/s10.jpeg',
    price: 600
  },
  {
    id: 'Samsung-s10-Plus',
    desc: '128 GB, new 100%.',
    img: './img/img-phone/s10plus.jpeg',
    price: 840
  }
];
var cartNumber = document.getElementById('js-total-count');
function findObjFromArr(idKey, myArray, prefix) {
  for (var i = 0; i < myArray.length; i++) {
    if (prefix + myArray[i].id === idKey) {
      return myArray[i];
    }
  }
}
function updateNumberCart() {
  var cartsArray = localStorage.getItem('carts');
  cartsArray = cartsArray ? JSON.parse(cartsArray) : [];
  var number = 0;
  for (var i = 0; i < cartsArray.length; i++) {
    number += cartsArray[i].count;
  }
  cartNumber.innerHTML = number;
}
updateNumberCart();
