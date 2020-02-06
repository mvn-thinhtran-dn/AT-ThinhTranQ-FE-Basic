var productMain = document.getElementById('js-cart-products');
var itemdiv;
var itemh;
var itemP;
var itemimg;
var itembutton;
var itemSpan;
var subNum;
var cardsArray;
function renderProduct() {
  var leng = products.length;
  for (var i = 0; i < leng; i++) {
    itemdiv = document.createElement('div');
    itemdiv.classList.add('p-item');

    itemimg = document.createElement('img');
    itemimg.setAttribute('src', products[i].img);
    itemimg.classList.add('p-img');
    itemdiv.appendChild(itemimg);

    itemh3 = document.createElement('div');
    itemh3.innerHTML = products[i].id;
    itemh3.classList.add('p-name');
    itemh3.appendChild(itemdiv);

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
  updatenumber = findObjFromArr(e.currentTarget.id, cartsArray, 'add-');
  if (updatenumber) {
    updatenumber.count++;
  } else {
    updatenumber = findObjFromArr(e.currentTarget.id, products, 'add-');
    cartsArray.push({ id: updatenumber.id, count: 1, price: updatenumber.price })
  }
  localStorage.setItem("carts", JSON.stringify(cartsArray));
  updateNumberCart();
}

renderProduct();
