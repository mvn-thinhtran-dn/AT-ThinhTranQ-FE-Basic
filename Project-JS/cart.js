var $Tbody = document.getElementById('js-cart-list');
var $Tfooter = document.getElementById('js-total');
var tempTr, temptd;
function renderCarts() {
  var cartsArray = window.localStorage.getItem('carts')
  cartsArray = cartsArray ? JSON.parse(cartsArray) : [];
  var total = 0, subtotal = 0;
  for (var i = 0; i < cartsArray.length; i++) {
    subtotal = cartsArray[i].count * cartsArray[i].price;
    total += subtotal;
    tempTr = document.createElement('tr');
    //Stt.
    temptd = document.createElement('td');
    temptd.innerHTML = i+1;
    tempTr.appendChild(temptd);

    //Name.
    temptd = document.createElement('td');
    temptd.innerHTML = cartsArray[i].id;
    tempTr.appendChild(temptd);

    //Quantity.
    temptd = document.createElement('td');
    temptd.innerHTML = cartsArray[i].count;
    tempTr.appendChild(temptd);

    //Price.
    temptd = document.createElement('td');
    temptd.innerHTML = cartsArray[i].price;
    tempTr.appendChild(temptd);

    //Subtotal.
    temptd = document.createElement('td');
    temptd.innerHTML = '$' + subtotal;
    tempTr.appendChild(temptd);

    //Btn-Delete.
    tempButton = document.createElement('button');
    temptd = document.createElement('td');
    tempButton.id = 'remove-' + cartsArray[i].id;
    tempButton.classList.add('c-delete');
    tempContent = document.createTextNode('X');
    tempButton.appendChild(tempContent);
    temptd.appendChild(tempButton);
    tempTr.appendChild(temptd);
    tempTr.id = 'row-' + cartsArray[i].id;
    tempButton.addEventListener('click', onclickbtn, false);

    $Tbody.appendChild(tempTr);
  }
  //ColSpan.
  tempTr = document.createElement('tr');
  temptd = document.createElement('td');
  temptd.innerHTML = '';
  temptd.setAttribute('colspan',3);
  tempTr.appendChild(temptd);

  temptd = document.createElement('td');
  temptd.innerHTML = 'Total: ';
  tempTr.appendChild(temptd);

  temptd = document.createElement('td');
  temptd.innerHTML = '$' + total;
  tempTr.appendChild(temptd);

  $Tfooter.appendChild(tempTr);
}

function onclickbtn(e) {
  var cartsArray = localStorage.getItem('carts')
  cartsArray = cartsArray ? JSON.parse(cartsArray) : [];
  document.getElementById('' + e.currentTarget.id)
  for (var i = 0; i < cartsArray.length; i++) {
    if(e.currentTarget.id === 'remove-' + cartsArray[i].id) {
      cartsArray.splice(i, 1);
    }
  }
  localStorage.setItem("carts", JSON.stringify(cartsArray));
  var $row = document.getElementById(e.currentTarget.id.replace(/remove-/, 'row-'));
  $row.remove();
  location.reload();
  numberCart();
}

renderCarts();