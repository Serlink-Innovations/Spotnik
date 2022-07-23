addEventListener('click', function () {

  let itemList = [];
  itemList = document.querySelectorAll('.item');

  for (let i = 0; i < itemList.length; i++) {
    const quantity = document.querySelector('.quantity').value;
    const unitPrice = document.querySelector('.price').value;

    let value = (Number(quantity) * Number(unitPrice)).toFixed(2);

    let total = value;

    document.querySelector('.total').innerHTML = `$${total}`;

    console.log(total)
  }

  for (let i = 0; i < itemList.length; i++) {
    const quantity = document.querySelector('.quantity2').value;
    const unitPrice = document.querySelector('.price2').value;

    let value = (Number(quantity) * Number(unitPrice)).toFixed(2);

    let total = value;

    document.querySelector('.total2').innerHTML = `$${total}`;

    console.log(total)
  }

  for (let i = 0; i < itemList.length; i++) {
    const quantity = document.querySelector('.quantity3').value;
    const unitPrice = document.querySelector('.price3').value;

    let value = (Number(quantity) * Number(unitPrice)).toFixed(2);

    let total = value;

    document.querySelector('.total3').innerHTML = `$${total}`;

    console.log(total)
  }

})