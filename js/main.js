/**addEventListener('change', function () {

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

});**/

addEventListener('load', function createTable() {

  //Table
  const table = document.createElement('table')
  table.className = 'orderTable';

  //Table Header
  const tableHead = document.createElement('thead');
  const tableRow = document.createElement('tr');

  const headers = ["Name", "Description", "Quantity", "Unit Price", "Total"];

  headers.forEach(headers => {

    let header = document.createElement('th');
    header.innerText = headers;
    tableRow.append(header);

  });

  table.append(tableHead);
  tableHead.append(tableRow);

  document.querySelector('.content').append(table);

  let products = [

    {
      Name: 'Dhal Puri',
      Description: 'N/A',
      Quantity: '2',
      UnitPrice: '26'
    },
    {
      Name: 'Buss Up Shot',
      Description: 'N/A',
      Quantity: '2',
      UnitPrice: '26'
    },
    {
      Name: 'Mango 280g',
      Description: 'N/A',
      Quantity: '2',
      UnitPrice: '14'
    },
    {
      Name: 'Curry Chicken',
      Description: 'N/A',
      Quantity: '2',
      UnitPrice: '18'
    }


  ]

  products.forEach(product => {

    let row = document.createElement('tr');

    Object.values(product).forEach(text => {
      let cell = document.createElement('td');
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    })
    table.appendChild(row);
  });

});