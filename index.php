<?php require 'header.php';?>
<header class="main">

    <nav class="navbar">

      <span>
        <a href="" id="brand">Spotnik</a>
        <img src="" alt="" id="logo">
      </span>

      <ul id="nav">

        <li>
          <a href="">Contacts</a>
        </li>

        <li>
          <a href="">Support</a>
        </li>

        <li>
          <a href="">Version</a>
        </li>

      </ul>

    </nav>

  </header>

  <div class="content">

    <div>

    </div>

    <table id="orderTable">

      <thead>
        <th>Item</th>
        <th>Quantity</th>
        <th>Description</th>
        <th>Unit Price</th>
        <th>Total</th>
      </thead>

      <tbody>

        <tr class="item">
          <td id="itemName">Dhal Puri</td>

          <td><input type="number" name="" class="quantity" id="quantity" min="0" max="10000"></td>

          <td id="description">N/A</td>

          <td>
            <select name="" class="price" id="price">
              <option value="26">26</option>
              <option value="28">28</option>
            </select>
          </td>

          <td class="total" id="total">

          </td>
        </tr>

        <tr class="item">
          <td id="itemName">Buss Up Shot</td>

          <td><input type="number" name="" class="quantity" id="quantity2" min="0" max="10000"></td>

          <td id="description">N/A</td>

          <td>
            <select name="" class="price" id="price2">
              <option value="26">26</option>
              <option value="28">28</option>
            </select>
          </td>

          <td class="total" id="total2">

          </td>
        </tr>

        <tr class="item">
          <td id="itemName">Mango 280g</td>

          <td><input type="number" name="" class="quantity" id="quantity3" min="0" max="10000"></td>

          <td id="description">N/A</td>

          <td>
            <select name="" class="price" id="price3">
              <option value="14">14</option>
            </select>
          </td>

          <td class="total" id="total3">

          </td>
        </tr>

      </tbody>

    </table>

  </div>

  <?php require 'footer.php';?>