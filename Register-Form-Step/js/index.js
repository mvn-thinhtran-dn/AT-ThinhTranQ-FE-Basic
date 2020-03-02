var formBtnNext1 = document.querySelector('#btn-1-next');
var formBtnPrev2 = document.querySelector('#btn-2-prev');
var formBtnNext2 = document.querySelector('#btn-2-next');
var formBtnNext3 = document.querySelector('#btn-3-next');
var formBtnPrev3 = document.querySelector('#btn-3-prev');
var formBtnSubmit4 = document.querySelector('#btn-4-submit');
var formBtnPrev4 = document.querySelector('#btn-4-prev');

// Button listener of form 1
formBtnNext1.addEventListener('click', function(e) {
  e.preventDefault();
  var error = document.getElementById('error');
  
  if(!fname.value) {
    error.innerHTML = "*Fisrt name is required!";
    return false;
  }
  else{ 
    error.innerHTML = "";
    if(!lname.value){
      error.innerHTML = "*Last name is required!";
      return false;
    }else{
      error.innerHTML = "";
      if(!email.value){
        error.innerHTML = "*Email is required!";
        return false;
      }else{
        error.innerHTML = "";
        if(!password.value){
          error.innerHTML = "*Password is required!";
          return false;
        }else{
          error.innerHTML = "";
          if(!confPass.value){
            error.innerHTML = "*Confirm password is required!";
            return false;
          }else{
              error.innerHTML = "";
              gotoNextForm(formBtnNext1, formBtnNext2, 1, 2);
          }
        }
      }
    }
  }
});

function checkPhoneNumber() {
  var input = document.getElementsByClassName('phone--number');
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function() {
      var count = 0;
      for (var i = 0; i <input.length; i++) {
        count += input[i].value.length;
      }

      if (count === 10) {
        formBtnNext2.disabled = false;
      } else {
        formBtnNext2.disabled = true;
      }
    });
  }
}

// Random Code.
var numberCode = '';
for(var i = 0; i < 4; i++){
  numberCode += Math.floor(Math.random()*10);
}

//Set Code in local.
localStorage.setItem('code',numberCode);

// Next button listener of form 2
formBtnNext2.addEventListener('click', function(e) {
  e.preventDefault();
  gotoNextForm(formBtnNext2, formBtnNext3, 2, 3);
  alert(numberCode);
});

// Previous button listener of form 2
formBtnPrev2.addEventListener('click', function(e) {
  gotoNextForm(formBtnNext2, formBtnNext1, 2, 1);
  e.preventDefault();
});

// Next button listener of form 3
formBtnNext3.addEventListener('click', function(e) {
  var code = localStorage.getItem('code');
  var codeGet=code.toString();
  var code1 = document.getElementById('code-number1').value;
  var code2 = document.getElementById('code-number2').value;
  var code3 = document.getElementById('code-number3').value;
  var code4 = document.getElementById('code-number4').value;
  var stringCode = code1.toString() + code2.toString() + code3.toString() + code4.toString();
  e.preventDefault();
  if(codeGet === stringCode){
    gotoNextForm(formBtnNext3, formBtnSubmit4, 3, 4);
    renderInfo();
  }else{
    alert('Nhap lai code!');
  }
});

// Previous button listener of form 3
formBtnPrev3.addEventListener('click', function(e) {
  gotoNextForm(formBtnNext3, formBtnNext2, 3, 2);
  e.preventDefault();
});

//Information Step 4
function renderInfo(){
  var info = document.getElementsByClassName('js--form-information')[0];
  var getstore = getStore();
  info.innerHTML = '<p class="showinfo">Full Name: ' + getstore[0]+' ' +getstore[1]+'</p>'
  + '<p class="showinfo">Email: ' + getstore[2] +'</p>'
  + '<p class="showinfo">Phone Number: ' + getstore[3] +'</p>';
}

// Submit listener of form 4
formBtnSubmit4.addEventListener('click', function(e) {
  document.querySelector(`.step--4`).classList.remove('step-active');
  document.querySelector(`.step--5`).classList.add('step-active');
  formBtnSubmit4.parentElement.style.display = 'none';
  document.querySelector('.form--message').innerHTML = `
    <h1 class="form--message-text">Your account is successfully created </h1>
    `;
  e.preventDefault();
});

// Previous button listener of form 4
formBtnPrev4.addEventListener('click', function(e) {
  gotoNextForm(formBtnSubmit4, formBtnNext3, 4, 3 );
  e.preventDefault();
});

var gotoNextForm = (prev, next, stepPrev, stepNext) => {
  // Get form through the button
  var prevForm = prev.parentElement;
  var nextForm = next.parentElement;
  var nextStep = document.querySelector(`.step--${stepNext}`);
  var prevStep = document.querySelector(`.step--${stepPrev}`);

  // Add active/inactive classes to both previous and next form
  nextForm.classList.add('form-active');
  nextForm.classList.add('form-active-animate');
  prevForm.classList.add('form-inactive');

  // Change the active step element
  prevStep.classList.remove('step-active');
  nextStep.classList.add('step-active');

  // Remove active/inactive classes to both previous an next form
  setTimeout(() => {
    prevForm.classList.remove('form-active');
    prevForm.classList.remove('form-inactive');
    nextForm.classList.remove('form-active-animate');
  }, 950);
};

var fname = document.getElementById('js--fisrt-name');
var lname = document.getElementById('js--last-name');
var email = document.getElementById('js--email');
var password = document.getElementById('js--pass');
var confPass = document.getElementById('js--conf-pass');
var phoneNumber1 = document.getElementById('phone--1');
var phoneNumber2 = document.getElementById('phone--2');
var phoneNumber3 = document.getElementById('phone--3');

  // Set LocalStorage
function setStore() {
  localStorage.setItem('fisrt-name', fname.value);
  localStorage.setItem('last-name', lname.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('pass', password.value);
  localStorage.setItem('conf-pass', confPass.value);
  localStorage.setItem('phone', phoneNumber1.value);
  localStorage.setItem('phone1', phoneNumber2.value);
  localStorage.setItem('phone2', phoneNumber3.value); 
}

//Get LocalStorage
function getStore() {
  return [
    localStorage.getItem('fisrt-name'),
    localStorage.getItem('last-name'),
    localStorage.getItem('email'),
    localStorage.getItem('phone')+localStorage.getItem('phone1') + localStorage.getItem('phone2')
  ];
}

checkPhoneNumber();
