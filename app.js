function update(product, price, isIncreasing) {
  const inputBox = document.getElementById(product + "-quantity");

  let productQuantity = inputBox.value;

  if (isIncreasing == true) {
    inputBox.value = parseInt(inputBox.value) + 1;
  } else if (inputBox.value > 0) {
    inputBox.value = parseInt(productQuantity) - 1;
  }
  ///update case total price

  //at first caseQuantity = inputBox.value which is one > then by clicking '+'  inputBox.value = 2 > caseQuantity is still 1>

  let productPrice = document.getElementById(product + "-price");

  productPrice.innerText = inputBox.value * price;

  // Call suBtotal

  calculateTotal();
}

// taking multiple input at a same time

function getInputProduct(product) {
  const inputBox = document.getElementById(product + "-quantity");

  const productQuantity = parseInt(inputBox.value);

  return productQuantity;
}

function calculateTotal() {
  const phoneTotal = getInputProduct("phone") * 1150;
  const caseTotal = getInputProduct("case") * 50;

  const subTotal = phoneTotal + caseTotal;

  const tax = subTotal * 0.15;

  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = subTotal + tax;
}

/// update phone case price
document.getElementById("case-plus").addEventListener("click", function () {
  //   const caseInput = document.getElementById("case-quantity");
  //   const caseQuantity = caseInput.value;
  //   caseInput.value = parseInt(caseQuantity) + 1;
  update("case", 50, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  //   const caseInput = document.getElementById("case-quantity");

  //   const caseQuantity = caseInput.value;

  //   caseInput.value = parseFloat(caseQuantity) - 1;

  update("case", 50, false);
});

/// update phone price
document.getElementById("phone-plus").addEventListener("click", function () {
  update("phone", 1150, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  update("phone", 1150, false);
});
