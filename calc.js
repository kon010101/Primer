
var screenValue1 = "";
var screenValue2 = "";
var resultString = "";
var result = 0;
var evalDone = false;

var operatorClicked = false;
var operatorType = 0;

function textToScreen(input) {
  if (!operatorClicked) {
    screenValue1 = screenValue1 + input;
    document.getElementById("screen").innerHTML = screenValue1;
  } else {
    screenValue2 = screenValue2 + input;
    document.getElementById("screen").innerHTML = screenValue2;
  }

}

function removeLastCharacter() {
  var oneShorter;
  if (!operatorClicked) {
    oneShorter = screenValue1.substring(0, screenValue1.length - 1);
    screenValue1 = oneShorter;
    document.getElementById("screen").innerHTML = screenValue1;
  } else {
    oneShorter = screenValue2.substring(0, screenValue2.length - 1);
    screenValue2 = oneShorter;
    document.getElementById("screen").innerHTML = screenValue2;
  }
}

function evaluate() {
  switch (operatorType) {
    case 0:
      break;
    case 1:
      result = parseFloat(screenValue1) + parseFloat(screenValue2);
      resultString = result.toString();
      document.getElementById("screen").innerHTML = resultString;
      break;
    case 2:
      result = parseFloat(screenValue1) - parseFloat(screenValue2);
      resultString = result.toString();
      document.getElementById("screen").innerHTML = resultString;
      break;
    case 3:
      result = parseFloat(screenValue1) / parseFloat(screenValue2);
      resultString = result.toString();
      document.getElementById("screen").innerHTML = resultString;
      break;
    case 4:
      result = parseFloat(screenValue1) * parseFloat(screenValue2);
      resultString = result.toString();
      document.getElementById("screen").innerHTML = resultString;
      break;

  }

}

function clearAll() {
  evalDone = false;
  resultString = "";
  screenValue1 = "";
  screenValue2 = "";
  resultString = "";
  result = 0;
  operatorClicked = false;
  operatorType = 0;
  document.getElementById("screen").innerHTML = resultString;

}

document.getElementById("key9").addEventListener('click', function() {
  if (evalDone == true) {
    clearAll();
  }
  textToScreen("9");
});
document.getElementById("key8").addEventListener('click', function() {
  if (evalDone == true) {
    clearAll();
  }
  textToScreen("8");
});
document.getElementById("key7").addEventListener('click', function() {
  if (evalDone == true) {
    clearAll();
  }
  textToScreen("7");
});
document.getElementById("key6").addEventListener('click', function() {
  if (evalDone == true) {
    clearAll();
  }
  textToScreen("6");
});
document.getElementById("key5").addEventListener('click', function() {
  if (evalDone == true) {
    clearAll();
  }
  textToScreen("5");
});
document.getElementById("key4").addEventListener('click', function() {
  if (evalDone == true) {
    clearAll();
  }
  textToScreen("4");
});
document.getElementById("key3").addEventListener('click', function() {
  if (evalDone == true) {
    clearAll();
  }
  textToScreen("3");
});
document.getElementById("key2").addEventListener('click', function() {
  if (evalDone == true) {
    clearAll();
  }
  textToScreen("2");
});
document.getElementById("key1").addEventListener('click', function() {
  if (evalDone == true) {
    clearAll();
  }
  textToScreen("1");
});
document.getElementById("key0").addEventListener('click', function() {
  if (evalDone == true) {
    clearAll();
  }
  textToScreen("0");
});
document.getElementById("keyDot").addEventListener('click', function() {
  if (evalDone == true) {
    clearAll();
  }
  textToScreen(".");
});

document.getElementById("clear").addEventListener('click', removeLastCharacter);
document.getElementById("clearAll").addEventListener('click', clearAll);

document.getElementById("plus").addEventListener('click', function() {
  evalDone = false;
  if (screenValue1 == "") {
    clearAll();
  } else if (screenValue1 != "" && screenValue2 == "") {
    operatorClicked = true;
    operatorType = 1;
  } else if (screenValue1 != "" && screenValue2 != "") {
    evaluate();
    operatorType = 1;
    screenValue1 = resultString;
    screenValue2 = "";
  }
});
document.getElementById("minus").addEventListener('click', function() {
  evalDone = false;
  if (screenValue1 == "") {
    clearAll();
  } else if (screenValue1 != "" && screenValue2 == "") {
    operatorClicked = true;
    operatorType = 2;
  } else if (screenValue1 != "" && screenValue2 != "") {
    evaluate();
    operatorType = 2;
    screenValue1 = resultString;
    screenValue2 = "";
  }
});

document.getElementById("div").addEventListener('click', function() {
  evalDone = false;
  if (screenValue1 == "") {
    clearAll();
  } else if (screenValue1 != "" && screenValue2 == "") {
    operatorClicked = true;
    operatorType = 3;
  } else if (screenValue1 != "" && screenValue2 != "") {
    evaluate();
    operatorType = 3;
    screenValue1 = resultString;
    screenValue2 = "";
  }
});
document.getElementById("mul").addEventListener('click', function() {
  evalDone = false;
  if (screenValue1 == "") {
    clearAll();
  } else if (screenValue1 != "" && screenValue2 == "") {
    operatorClicked = true;
    operatorType = 4;
  } else if (screenValue1 != "" && screenValue2 != "") {
    evaluate();
    operatorType = 4;
    screenValue1 = resultString;
    screenValue2 = "";
  }
});
document.getElementById("eval").addEventListener('click', function() {
  evaluate();
  evalDone = true;
  screenValue1 = resultString;
  screenValue2 = "";
});
