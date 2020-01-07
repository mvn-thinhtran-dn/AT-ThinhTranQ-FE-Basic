
//Bai 1:
function Ex1(a,b) {
  var kq;
  if (a === b) {
    kq = (a + b) * 3;
  } else {
    kq = a + b;
  }
  console.log ('kq la:' +kq);
}
Ex1(5,10);

//Bai2:
function Ex2(number,specifiednumber) {
  if (specifiednumber > number)
    console.log ('Chenh lech: ' +(specifiednumber - number) * 3);
  else
    console.log ('Chenh lech: ' +(number - specifiednumber));
}
Ex1(19,22);
//Bai3:
function Ex3(String) {
  var arr = String.split('*');
  var sum = 0;
  for(let i = 0; i < String.length; i++){
    if(String[i]==="*"){
      continue;
    }
    sum += parseInt(String[i]);
  }
  sum = sum % 3;
  sum = sum === 0
  ? [0, 3, 6, 9]
  : sum === 1
  ? [2, 5, 8]
  : [1, 4, 7];
    console.log (sum.map (num => arr[0] + num + arr[1] ));
}
Ex3('1*90');

//Bai4:
function Ex4(String) {
  for (let i = 0; i <= 9; i++) {  
    var k = String.replace("*",i);  
    if (parseInt(k) % 6 === 0) {
      console.log (k);
    }   
  } 
}
Ex4('1*98');

