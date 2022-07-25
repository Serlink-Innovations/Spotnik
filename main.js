import './style.css';

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