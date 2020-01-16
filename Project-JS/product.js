var productMain = document.getElementById('js-cart-products');
var itemdiv, itemh4, itemP, itemimg, itembutton, itemSpan, subNum, cardsArray;
function renderProduct() {
  for (var i = 0, leng = products.length; i < leng; i++) {
    itemdiv = document.createElement('div');
    itemdiv.classList.add('p-item');

    itemimg = document.createElement('img');
    itemimg.setAttribute('src', products[i].img);
    itemimg.classList.add('p-img');
    itemdiv.appendChild(itemimg);

    itemh4 = document.createElement('div');
    itemh4.innerHTML = products[i].id;
    itemh4.classList.add('p-name');
    itemdiv.appendChild(itemh4);

    itemP = document.createElement('div');
    itemP.innerHTML = products[i].desc;
    itemP.classList.add('p-desc');
    itemdiv.appendChild(itemP);

    itemP = document.createElement('p');
    itemP.innerHTML = 'Price: $' + products[i].price;
    itemP.classList.add('p-price');
    itemdiv.appendChild(itemP);

    itembutton = document.createElement('button');
    itembutton.id = 'add-' + products[i].id;
    itembutton.innerHTML = 'Add to cart';
    itembutton.classList.add('p-add');
    itemdiv.appendChild(itembutton);

    productMain.appendChild(itemdiv);

    itembutton.addEventListener('click', addHandleEvent, false);
  }
}

var getCarts = function () {
  cartsArray = localStorage.getItem('carts')
  return cartsArray = cartsArray ? JSON.parse(cartsArray) : [];
}

function addHandleEvent(e) {
  cardsArray = getCarts();
  numbercart = searchArray(e.currentTarget.id, cartsArray, 'add-');
  if (numbercart) {
    numbercart.count++;
  } else {
    numbercart = searchArray(e.currentTarget.id, products, 'add-');
    cartsArray.push({ id: numbercart.id, count: 1, price: numbercart.price })
  }
  localStorage.setItem("carts", JSON.stringify(cartsArray));
  numberCart();
}

renderProduct();
