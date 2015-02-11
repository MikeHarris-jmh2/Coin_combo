var coinCounter = function(amount) {
  var total = parseInt(amount);
  var pennies = 0;
  var nickel = 0;
  var totalOutput = [];
  var pennyString;

// quarters
  if (total > 24 && total < 50) {
    total -= 25;
    totalOutput.push("1 quarter");
  } else if ( total < 75 && total > 49) {
    total -= 50;
    totalOutput.push("2 quarters");
  } else if ( total < 100 & total > 75) {
    total -= 75
    totalOutput.push("3 quarters");
  }

// dimes
  if (total < 21 && total > 9) {
    total -= 10;
    totalOutput.push("1 dime");
  } else if (total < 25 && total > 19) {
    total -= 20
    totalOutput.push("2 dimes")
  }

// nickels
  if (total < 10 && total > 4) {
    total -= 5
    totalOutput.push("1 nickel");
  }

// pennies
  if (total < 5 && total > 0) {
    pennies = total
  }

  if (pennies > 1) {
    pennyString = pennies + " pennies";
    totalOutput.push(pennyString);
  } else if (pennies === 1) {
    pennyString = pennies + " penny"
    totalOutput.push(pennyString);
  }

  return totalOutput;
};

$(function() {
  $("form").submit(function(event) {
    var amountInput = $("input#amount").val();
    var amountOutput = coinCounter(amountInput);
    $("#result").text(amountOutput);

    event.preventDefault();
  });
});
