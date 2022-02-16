var product_table = [];
$(document).ready(function () {
  $("#button5").hide();
  $("#button1").click(function () {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;
    console.log(id);
    obj = {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
    };
    product_table.push(obj);
    addition(product_table);
  });
});
function addition(product_table) {
  html =
    "<table><tr><th>Id</th><th>Name</th><th>Price</th><th>Quantity</th></tr>";
  for (var i = 0; i < product_table.length; i++) {
    html +=
      "<tr><td>" +
      product_table[i].id +
      "</td><td>" +
      product_table[i].name +
      "</td><td>" +
      product_table[i].price +
      "</td><td>" +
      product_table[i].quantity +
      "</td></tr>";
  }
  html += "</table>";
  console.log(html);
}
function display() {
  html =
    "<table><tr><th>Id</th><th>Name</th><th>Price</th><th>Quantity</th></tr>";
  for (var i = 0; i < product_table.length; i++) {
    html +=
      "<tr><td>" +
      product_table[i].id +
      "</td><td>" +
      product_table[i].name +
      "</td><td>" +
      product_table[i].price +
      "</td><td>" +
      product_table[i].quantity +
      "</td></tr>";
  }
  html += "</table>";
  document.getElementById("output").innerHTML = html;
}
function deleteData() {
  var val1 = document.getElementById("id").value;

  let text;

  if (confirm("sure!you want to delete this entry") == true) {
    for (var i = 0; i < product_table.length; i++) {
      if (product_table[i].id == val1) {
        console.log("Deleting " + product_table[i].id);
        product_table.splice(i, 1);
      }
    }
    display();
  } else {
    text = "You canceled!";
  }
}
function update() {
  $("#button5").show();
  var x = parseInt(document.getElementById("id").value);
  console.log(x);

  for (var j = 0; j < product_table.length; j++) {
    if (product_table[j].id == x) {
      $("#id").val(product_table[j].id);
      console.log($("#name").val(product_table[j].name));
      $("#price").val(product_table[j].price);
      $("#quantity").val(product_table[j].quantity);
    }
  }
}

$("#button5").click(function () {
  var val1 = document.getElementById("id").value;
  var val2 = document.getElementById("name").value;
  var val3 = document.getElementById("price").value;
  var val4 = document.getElementById("quantity").value;
  for (var i = 0; i < product_table.length; i++) {
    if (product_table[i].id == val1) {
      product_table[i].name = val2;
      product_table[i].price = val3;
      product_table[i].quantity = val4;
      alert(" Value updated");
    }
  }
});
