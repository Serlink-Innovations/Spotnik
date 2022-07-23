addEventListener('change', function () {

  let itemList = [];
  itemList = document.getElementsByClassName('item');

  let value = document.querySelector('#quantity').value * document.querySelector('#price').value;
  let total = Number(value).toFixed(2);

  let value2 = document.querySelector('#quantity2').value * document.querySelector('#price2').value;
  let total2 = Number(value2).toFixed(2);

  let value3 = document.querySelector('#quantity3').value * document.querySelector('#price3').value;
  let total3 = Number(value3).toFixed(2);

  document.querySelector('#total').innerHTML = `$${total}`;
  document.querySelector('#total2').innerHTML = `$${total2}`;
  document.querySelector('#total3').innerHTML = `$${total3}`;

});