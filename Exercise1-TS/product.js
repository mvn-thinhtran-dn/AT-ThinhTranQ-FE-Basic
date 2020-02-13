var productMain = document.getElementById('js-cart-products');
var itemdiv;
var item;
var itemP;
var itemimg;
var itembutton;
var subNum;
function renderProduct() {
    var leng = products.length;
    for (var i = 0; i < leng; i++) {
        itemdiv = document.createElement('div');
        itemdiv.classList.add('p-item');
        itemimg = document.createElement('img');
        itemimg.setAttribute('src', products[i].img);
        itemimg.classList.add('p-img');
        itemdiv.appendChild(itemimg);
        item = document.createElement('div');
        item.innerHTML = products[i].id;
        item.classList.add('p-name');
        itemdiv.appendChild(item);
        item = document.createElement('div');
        item.innerHTML = products[i].desc;
        item.classList.add('p-desc');
        itemdiv.appendChild(item);
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
function addHandleEvent(e) {
    var cardsArray = getCarts();
    var updatenumber = findObjFromArr(e.currentTarget.id, cartsArray, 'add-');
    if (updatenumber) {
        updatenumber.count++;
    }
    else {
        updatenumber = findObjFromArr(e.currentTarget.id, products, 'add-');
        cartsArray.push({ id: updatenumber.id, count: 1, price: updatenumber.price });
    }
    localStorage.setItem("carts", JSON.stringify(cartsArray));
    updateNumberCart();
}
renderProduct();
